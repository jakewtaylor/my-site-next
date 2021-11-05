import Head from 'next/head';
import Link from 'next/link';
import { FaviconMeta } from '../components/FaviconMeta';
import { CollectionIcon } from '../components/icons/Collection';
import { Layout } from '../components/Layout';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';

const Home: React.FC = () => (
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
        <h5 className="text-xl text-gray-300">Hey, my name is</h5>
        <h1 className="text-6xl font-black text-gray-100">Jake Taylor</h1>

        <p className="text-xl text-gray-300 mt-6">
          I'm a freelance web/app developer available for hire.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          I have expertise with PHP, Javascript, Typescript, and CSS. I've
          worked with many tools/frameworks including Laravel, React &amp; React
          Native, Angular, Vue, SCSS, Tailwind, and many others.
          <br />
          My preferred stack is Laravel with React, or Vue when only small
          amounts of interactivity are required.
        </p>

        <p className="text-xl text-gray-300 mt-4">
          I'm a full-stack developer, meaning I can help you build something
          fully functional that looks and feels great.{' '}
          <Link href="/contact">
            <a className="text-indigo-500 hover:text-indigo-300">
              Get in touch and let's work together!
            </a>
          </Link>
        </p>

        <p className="text-xl text-gray-300 mt-4">
          If you want to see my full experience, please check my{' '}
          <a
            href="https://www.linkedin.com/in/jakewtaylor/"
            className="text-indigo-500 hover:text-indigo-300"
          >
            LinkedIn
          </a>
          . If you want to see some code, check my{' '}
          <a
            href="https://github.com/jakewtaylor"
            className="text-indigo-500 hover:text-indigo-300"
          >
            GitHub
          </a>
          .
        </p>

        <p className="text-xl text-gray-300 mt-4">
          If you want to see and read about some of my work, check out my{' '}
          <Link href="/portfolio">
            <a className="text-indigo-500 hover:text-indigo-300">
              portfolio page
            </a>
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Link href="/portfolio">
            <a className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-2 md:hover:-rotate-2 md:hover:scale-110">
              <p className="text-gray-200 font-bold text-3xl leading-none">
                Portfolio
              </p>
              <p className="text-gray-200 leading-none mt-1">
                Some of my work.
              </p>
            </a>
          </Link>

          <a
            href="https://github.com/jakewtaylor"
            className="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-2 md:hover:-rotate-2 md:hover:scale-110"
          >
            <p className="text-gray-200 font-bold text-3xl leading-none">
              Github
            </p>
            <p className="text-gray-200 leading-none mt-1">
              Some of my projects.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/jakewtaylor/"
            className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-2 md:hover:-rotate-2 md:hover:scale-110"
          >
            <p className="text-gray-200 font-bold text-3xl leading-none">
              LinkedIn
            </p>
            <p className="text-gray-200 leading-none mt-1">
              See my experience.
            </p>
          </a>
        </div>
      </Main>
    </Layout>
  </>
);

export default Home;
