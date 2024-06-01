"use client"

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

const FAQ=()=> {
  const defaultContent:string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
    <Accordion selectionMode="multiple">
      <AccordionItem key="1" aria-label="Accordion 1" title="What is Parking Time?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How do I use Parking Time?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Is it free?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="How do I get it in my municipality?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Known problems with the app">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
  );
}

export default FAQ;
