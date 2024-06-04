import { getDictionary } from './dictionaries'
 

export default async function Home({params: {lang } } ) {
  
  const dict = await getDictionary(lang )
  return <main>{dict.Home.title}</main>;
}
