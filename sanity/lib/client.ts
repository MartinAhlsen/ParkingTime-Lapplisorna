import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId: "m838832i",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
  perspective: 'published',
})
