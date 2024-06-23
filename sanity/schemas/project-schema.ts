import { sources } from "next/dist/compiled/webpack/webpack";
import { title } from "process";

const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [{
        name:"name",
        title: "Name",
        type: "string"
    },
    {
        name:"slug",
        title: "Slug",
        type: "slug", //inbuild type in QROQ
        options: {source:"name"}
    },
    {
        name:"image_article",
        title: "image_article",
        type: "image", //inbuild type in QROQ
        options: {hotspot:true},
        fields: [ 
            {
            name: "alt",
            title: "Alt",
            type: "string"
        }
        ]
    },
    {
        name:"url",
        title: "URL",
        type: "url", //inbuild type in QROQ
        
    },
    {
        name:"title_sv",
        title: "title_sv",
        type: "string"
    },
    {
        name:"text_Short_sv",
        title: "text_Short_sv",
        type: "string"
    },
    {
        name:"text_Long_sv",
        title: "text_Long_sv",
        type: "string"
    },
    {
        name:"title_en",
        title: "title_en",
        type: "string"
    },
    {
        name:"text_Short_en",
        title: "text_Short_en",
        type: "string"
    },
    {
        name:"text_Long_en",
        title: "text_Long_en",
        type: "string"
    },
    {
        name:"image_author",
        title: "image_author",
        type: "image", //inbuild type in QROQ
        options: {hotspot:true},
        fields: [ 
            {
            name: "alt",
            title: "Alt",
            type: "string"
        }
        ]
    },
    {
        name:"author",
        title: "author",
        type: "string"
    },
    {
        name:"date",
        title: "date",
        type: "string"
    },

    ]
}

export default project