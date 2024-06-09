

import React from "react";
import ReactDOM from "react-dom/client";
import {Accordion, AccordionItem} from "@nextui-org/react"
import AnchorIcon from "../accordions/anchorIcon"
import MoonIcon from "../accordions/moonIcon"
import SunIcon from "../accordions/sunIcon"
import "./styles.css"


const FAQ = () => {
  const defaultContent: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
       <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
      
    </>
  );
}

export default FAQ;
