import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "m838832i",
        dataset: "production",
        useCdn: false
        
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image_article": image_article.asset->url,
            url,
            title_sv,
            text_Short_sv,
            text_Long_sv,
            title_en,
            text_Short_en,
            text_Long_en,
            "image_author": image_author.asset->url,
            author,
            date,
        }`
    );
}
