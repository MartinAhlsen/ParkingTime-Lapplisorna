import { getDictionary } from './dictionaries'
 

export default async function Home({params: {lang}}) {
  const dict = await getDictionary(lang) // en
  return <main>{dict.products.intro}</main>;
}
