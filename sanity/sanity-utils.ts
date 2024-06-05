import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "m838832i",
        dataset: "production",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    );
}
