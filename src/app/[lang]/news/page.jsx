import { getDictionary } from "../dictionaries";
import TitleSubtitle from "@/app/components/TitleSubtitle";
const News = async ({params: {lang}}) => {
  const dict = await getDictionary(lang)
    return (
        <>
          <h2>{dict.news.title}</h2>
          <TitleSubtitle
            title="Don´t miss"
            subtitle="We are expanding rapidly, subscribe to our newsletter."
            overtitle="News"
          />
        </>
    )
};

export default News