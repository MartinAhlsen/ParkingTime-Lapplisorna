import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import styles from "./contactLinks.module.css"; // Assuming you have defined this correctly

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
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`relative flex gap-1 ${styles.contactLinkContainer}`}>
      <div
        className={`imageWrapper flex ${title !== "maplocation icon" ? "align-center" : "justify-start flex-grow-0"}`}
      >
        <Image
          src={imageLink}
          width={24}
          height={24}
          alt={title}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="textContainer flex flex-col justify-center relative">
        {title === "maplocation icon" ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Nyk%C3%B6pingsv%C3%A4gen+52,+611+50+Nyk%C3%B6ping/@58.7405526,16.9212069,17z/data=!3m1!4b1!4m6!3m5!1s0x465f2cc5bd5871eb:0x22c6ead5227bf3ce!8m2!3d58.7405498!4d16.9237818!16s%2Fg%2F11vc4ypzp3?entry=ttu"
            className="p-2 text-center flex flex-col items-start text-black dark:text-white transition-all duration-150 ease-in-out rounded-xl group relative"
            style={{ textDecoration: "none", color: "currentColor" }}
          >
            <span>{paragraph}</span>
            {paragraph2 && <span>{paragraph2}</span>}
            {copied && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-pt-secondary text-white opacity-90 z-10 rounded-md">
                Copied to clipboard
              </div>
            )}
          </a>
        ) : (
          <>
            <p
              className={`p-2 flex items-center relative cursor-pointer ${styles.hoverUnderlineAnimation}`}
              onClick={() => handleCopyToClipboard(paragraph)}
            >
              {paragraph}
              {/* Underline animation */}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </p>
            {paragraph2 && (
              <p className="p-2 flex items-center">{paragraph2}</p>
            )}
            {copied && (
              <div className="button-text absolute top-0 left-0 w-full h-full flex items-center justify-center bg-pt-secondary text-white z-10 rounded-full">
                Copied to clipboard
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactLink;
