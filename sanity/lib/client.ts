import { createClient } from 'next-sanity'

import { dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId: "m838832i",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  perspective: 'published',
})
