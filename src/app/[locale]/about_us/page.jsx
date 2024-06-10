import { getDictionary } from "../dictionaries";

const About_us = async ({params: {lang}}) => {
  const dict = await getDictionary(lang)
    return (
        <>
          <h2>{dict.about_us.title}</h2>
        </>
    )
};

export default About_us
