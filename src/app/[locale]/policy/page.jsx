
import { getDictionary } from "../dictionaries";

const Policy = async ({params: {lang}}) => {
  const dict = await getDictionary(lang)
    return (
        <>
          <h2>{dict.policy.title}</h2>
        </>
    )
};

export default Policy