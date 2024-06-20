import {PortableTextBlock} from "sanity";

export type Project = {
    
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image_article: string;
    url: string;
    title_sv: string,
    title_en: string,
    text_Short_sv: string;
    text_Long_sv: string;
    text_Short_en: string;
    text_Long_en: string;
    image_author: string;
    author: string;
    date: string;
}