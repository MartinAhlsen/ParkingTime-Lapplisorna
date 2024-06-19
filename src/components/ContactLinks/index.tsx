import { StaticImageData } from "next/image";

import Image from "next/image";

interface ContactLinkProps {
  imageLink: StaticImageData;
  title: string;
  paragraph: string;
  paragraph2?: string;
}

const ContactLink = ({
  imageLink,
  title,
  paragraph,
  paragraph2,
}: ContactLinkProps) => {
  return (
    <div className="flex gap-1">
      <div className="imageWrapper">
        <Image
          src={imageLink}
          width={24}
          height={24}
          alt={title}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="textContainer flex flex-col justify-center">
        <p
          className={`p2 flex items-center
        ${title !== "maplocation icon" ? "underline" : ""}
        `}
        >
          {paragraph}
        </p>
        {paragraph2 && <p className="p2 flex items-center">{paragraph2}</p>}
      </div>
    </div>
  );
};

export default ContactLink;
