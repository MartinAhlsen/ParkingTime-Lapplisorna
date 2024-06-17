import { getDictionary } from "../dictionaries";

const Contact_us = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <h2>{dict.contact_us.title}</h2>
    </>
  );
};

export default Contact_us;
