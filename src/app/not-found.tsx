"use client";

import Head from "next/head";
import React, { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    const crtElement = document.querySelector(".crt_effect");
    if (crtElement) {
      const interval = setInterval(() => {
        crtElement.classList.add("flicker_delay");
        setTimeout(() => {
          crtElement.classList.remove("flicker_delay");
        }, 1900);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="crt_effect flex justify-center items-center h-screen bg-black text-green-500">
        <pre className="text">
          {`
  ┌───────────────────────────────────────────┐
  │           Error: 404 - Not Found          │
  ├───────────────────────────────────────────┤
  │ The page you're looking for doesn't exist.│
  │ Please check the URL and try again.       │
  └───────────────────────────────────────────┘
`}
        </pre>
      </div>
    </>
  );
}
