Follows: 
Precedes: 

"use client"

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from "./FAQ.module.css"
import Moon from "../accordions/moonIcon"
import Sun from "../accordions/sunIcon"
import Anchor from "../accordions/anchorIcon"
import Dollar from "../accordions/dollarIcon"




const FAQ = () => {
  const defaultContent: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion className={styles.accordionContainer} >
        <AccordionItem className={styles.accordion} key="1" aria-label="Accordion 1" title="What is Parking Time?" indicator={"❤️"}>
          <div className={styles.accordionContent}>{defaultContent}</div>
        </AccordionItem>
        <AccordionItem className={styles.accordion} key="2" aria-label="Accordion 2" title="How do I use Parking Time?" indicator={"🧡"}>
          <div className={styles.accordionContent}>{defaultContent}</div>
        </AccordionItem>
        <AccordionItem className={styles.accordion} key="3" aria-label="Accordion 3" title="Is it free?" indicator={"💛"}>
          <div className={styles.accordionContent}>{defaultContent}</div>
        </AccordionItem>
        <AccordionItem className={styles.accordion} key="4" aria-label="Accordion 4" title="How do I get it in my municipality?" indicator={"💚"}>
          <div className={styles.accordionContent}>{defaultContent}</div>
        </AccordionItem>
        <AccordionItem className={styles.accordion} key="5" aria-label="Accordion 5" title="Known problems with the app" indicator={"💙"}>
          <div className={styles.accordionContent}>{defaultContent}</div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;