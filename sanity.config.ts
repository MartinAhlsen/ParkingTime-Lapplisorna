'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import schemas from './sanity/schemas'


export default defineConfig({
  basePath: '/studio',
  projectId: "m838832i",
  dataset: "production",
  title:"Parking time",
  apiVersion: "v1",
  useCdn: true, //set to false to deliver content faster
  
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {types: schemas},
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
