import React from 'react';
import Head from 'next/head';
import { FaviconMeta } from '../components/FaviconMeta';
import { Sidebar } from '../components/Sidebar';
import { Layout } from '../components/Layout';
import { Main } from '../components/Main';

const Contact: React.FC = () => (
  <>
    <Head>
      <title>
        Jake Taylor &mdash; Freelance, full-stack, web/app developer
      </title>
      <FaviconMeta />
    </Head>

    <Sidebar />

    <Layout>
      <Main>
        <h1 className="text-6xl font-black text-gray-100">Get in touch</h1>

        <p className="text-xl text-gray-300 mt-6">
          Got a project and need a dev? I'm your guy!
        </p>

        <p className="text-xl text-gray-300 mt-4">
          The best way to get in touch with me is either:
          <ul className="list-disc pl-8 mt-2">
            <li>
              by emailing me on{' '}
              <a
                href="mailto:me@jaketaylor.co"
                className="text-indigo-500 hover:text-indigo-300"
              >
                me@jaketaylor.co
              </a>
              ,
            </li>
            <li className="mt-1">
              or by messaging me on{' '}
              <a
                href="https://www.linkedin.com/in/jakewtaylor/"
                className="text-indigo-500 hover:text-indigo-300"
              >
                LinkedIn
              </a>
              .
            </li>
          </ul>
        </p>

        <p className="text-xl text-gray-300 mt-4">
          I look forward to hearing from you!
        </p>
      </Main>
    </Layout>
  </>
);

export default Contact;
