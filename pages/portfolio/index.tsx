import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Sidebar } from '../../components/Sidebar';
import { Main } from '../../components/Main';
import { FaviconMeta } from '../../components/FaviconMeta';

import vwlCoverPhoto from '../../assets/portfolio/vwl-cover.png';

const Portfolio: React.FC = () => (
  <>
    <Head>
      <title>Portfolio &mdash; Jake Taylor</title>

      <FaviconMeta />
    </Head>

    <Sidebar />

    <Layout>
      <Main>
        <h1 className="text-6xl font-black text-gray-100">Portfolio</h1>
        <p className="text-xl text-gray-300 mt-6">
          Below is some of my work, please look around.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link href="/portfolio/vwl">
            <a className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105">
              <div className="relative w-full" style={{ fontSize: 0 }}>
                <Image src={vwlCoverPhoto} width={842} height={495} />
              </div>

              <div className="px-4 pb-2">
                <h6 className="text-gray-200 font-bold text-xl">
                  Veterinary Wound Library
                </h6>
              </div>
            </a>
          </Link>

          <Link href="/contact">
            <a className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg overflow-hidden p-8 transition-transform md:transform md:hover:scale-105">
              <h6 className="text-gray-800 font-bold text-2xl leading-6">
                Maybe your site should be here?
              </h6>
              <p className="leading-4 text-gray-700 mt-4">
                Get in touch, let's build something together.
              </p>
            </a>
          </Link>
        </div>
      </Main>
    </Layout>
  </>
);

export default Portfolio;
