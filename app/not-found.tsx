import React from 'react';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <pre>
{`
  ┌──────────────────────────────────────────┐
  │           Error: 404 - Not Found        │
  ├──────────────────────────────────────────┤
  │ The page you're looking for doesn't exist.│
  │ Please check the URL and try again.      │
  └──────────────────────────────────────────┘
`}
        </pre>
      </div>
    </>
  );
}
