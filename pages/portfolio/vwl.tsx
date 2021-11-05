import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Sidebar } from '../../components/Sidebar';
import { Layout } from '../../components/Layout';
import { Main } from '../../components/Main';
import { FaviconMeta } from '../../components/FaviconMeta';

import indexImage from '../../assets/portfolio/vwl-index.png';
import repliesImage from '../../assets/portfolio/vwl-replies.png';
import iosImage from '../../assets/portfolio/vwl-ios.png';

const Vwl: React.FC = () => (
  <>
    <Head>
      <title>Veterinary Wound Library &mdash; Jake Taylor</title>
      <FaviconMeta />
    </Head>

    <Sidebar />

    <Layout>
      <Main>
        <h1 className="text-6xl font-black text-gray-100">
          Veterinary Wound Library
        </h1>

        <h3 className="mt-6 text-gray-300 text-opacity-75 text-sm uppercase font-bold">
          Overview
        </h3>

        <p className="text-xl text-gray-300 mt-1">
          The{' '}
          <a href="https://vetwoundlibrary.org">
            Veterinary Wound Library (VWL)
          </a>{' '}
          is a membership based resource that is dedicated to helping Vets,
          Techs, and Nurses better manage their patients wounds. They offer
          several services, including online training, case support, and a
          growing library of educational content.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          I worked with VWL to improve their case support service. Their
          existing solution was a very manual process that required customers
          and specialists to email back and forth, and depended on several third
          party integrations.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          VWL gave me a great spec explaining what they needed, but I was left
          in charge of many design decisions. They were very welcoming of my
          ideas, and I think the end product speaks volumes to the
          collaborative/iterative approach.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          I integrated a unified case support system into their existing Laravel
          site. The case support area is for both customers and specialists to
          manage their opened/assigned cases.
        </p>

        <figure className="mt-4">
          <Image
            src={indexImage}
            width={1425}
            height={724}
            className="rounded-lg"
          />
          <figcaption className="text-gray-400 leading-none ml-2">
            Any data in screenshots is faked as the real system contains
            sensitive information.
          </figcaption>
        </figure>

        <p className="text-xl text-gray-300 mt-6">
          I helped come up with a system that would allow any user to easily
          find the case they're interested in, and quickly post questions, and
          see historic correspondence.
        </p>

        <figure className="mt-4">
          <Image
            src={repliesImage}
            width={1308}
            height={552}
            className="rounded-lg"
          />
          <figcaption className="text-gray-400 leading-none ml-2">
            Any data in screenshots is faked as the real system contains
            sensitive information.
          </figcaption>
        </figure>

        <p className="text-xl text-gray-300 mt-6">
          As well as the web app, I also built a corresponding React Native
          application for both iOS and Android. It provides the same
          functionality as the website, but allows users to correspond on cases
          when they're on the move.
        </p>

        <figure className="mt-4">
          <Image
            src={iosImage}
            width={1204}
            height={988}
            className="rounded-lg"
          />
          <figcaption className="text-gray-400 leading-none ml-2">
            Any data in screenshots is faked as the real system contains
            sensitive information.
          </figcaption>
        </figure>

        <h3 className="mt-6 text-gray-300 text-opacity-75 text-sm uppercase font-bold">
          Tech Details
        </h3>

        <p className="text-xl text-gray-300 mt-1">
          All of this work was done with Laravel &amp; React. The mobile app was
          built with React Native, so a lot of the Typescript code was shared
          between the projects.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          VWL were already using Laravel for their existing site, so the backend
          for the case support system was built into that. I liaised with their
          in-house dev, and we decided that we should also rebuild their
          existing static "member area" with a React version, for easier
          integration with other tools they plan to build in the future.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          State management for the case support system was done using Redux,
          which made sense for this system as there was a lot of relational data
          to render out, and lots of navigating around&mdash;having stuff cached
          makes the experience much snappier. Using Redux made it easy to
          implement live updates, so whenever any changes are made to the
          backend, the frontend reflects that nearly immediately, without the
          need to reload the page. This works in the app, too!
        </p>

        <p className="text-xl text-gray-300 mt-4">
          All the case responses go through Laravels event/notification systems,
          so we enabled push notifications and/or email alerts for certain
          events.
        </p>

        <h3 className="mt-6 text-gray-300 text-opacity-75 text-sm uppercase font-bold">
          Conclusion
        </h3>

        <p className="text-xl text-gray-300 mt-1">
          This was a really interesting project to work on, and it was a lot of
          fun coming up with ideas and designs to get it completed. I'd happily
          work with VWL again, and believe they'd say the same about me!
        </p>
      </Main>
    </Layout>
  </>
);

export default Vwl;
