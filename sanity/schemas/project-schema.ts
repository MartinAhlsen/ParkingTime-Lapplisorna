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
        name:"image",
        title: "Image",
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
        name:"content",
        title: "Content",
        type: "array", //inbuild type in QROQ
        of: [{type: "block"}]
    },
    {
        name:"text2",
        title: "Text2",
        type: "string"
    },
       

    ]
}

export default project