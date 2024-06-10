import { getDictionary } from "./[locale]/dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang || "se"); //SHOW CLASSSS SO MUCH
  return <main>{dict.home.title}</main>;
}
