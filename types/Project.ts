import {PortableTextBlock} from "sanity";

export type Project = {
    text2: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}