import { createClient } from 'next-sanity'

import { dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId: "m838832i",
  dataset: "production",
  useCdn: false,
  perspective: 'published',
})
