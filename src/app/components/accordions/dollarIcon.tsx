"use client";

import React from "react";

const DollarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path
      d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm1 17h-2v-2h2v2zm2.07-7.75l-1.2.92c-.37.29-.57.5-.57 1.02v.09h-1.5v-.13c0-.61.24-1.14.65-1.54l1.2-.92c.37-.29.57-.5.57-1.02 0-.55-.45-1-1-1s-1 .45-1 1H9c0-1.65 1.35-3 3-3s3 1.35 3 3c0 .61-.24 1.14-.65 1.54z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default DollarIcon;
