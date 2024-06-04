import { createClient, groq } from "next-sanity";

export async function getProjects() {
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
