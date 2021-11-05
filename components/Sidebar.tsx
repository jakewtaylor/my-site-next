import React from 'react';
import { HomeIcon } from './icons/Home';
import { CollectionIcon } from './icons/Collection';
import { NavLink } from './NavLink';
import { ChatIcon } from './icons/Chat';

export const Sidebar: React.FC = () => (
  <aside className="fixed right-0 left-0 bottom-0 md:bottom-auto md:right-auto md:h-screen w-full md:w-64 bg-gray-800 py-2 md:py-0 z-50">
    <div className="p-2 md:py-0 md:px-8 flex justify-center md:static absolute bottom-full left-1/2 md:transform-none transform -translate-x-1/2 translate-y-3 rounded-lg bg-gray-800">
      {/* Logo */}
      <div className="w-8 h-8 md:w-24 md:h-24 flex items-center justify-center relative md:mt-20">
        <div className="w-8 h-8 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 absolute inset-0 transform -rotate-3 z-10" />
        <h3 className="text-xl md:text-5xl text-gray-800 font-black z-20">
          JT
        </h3>
      </div>
    </div>

    <nav className="text-gray-200 font-medium md:mt-8 relative z-20">
      <ul className="mx-4 space-x-2 md:space-x-0 md:space-y-2 flex flex-row md:flex-col justify-center">
        <li>
          <NavLink href="/">
            {(active) => (
              <a
                className={`px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active ? 'bg-indigo-500 bg-opacity-20' : ''
                }`}
              >
                <HomeIcon
                  className={`h-5 w-5 opacity-75 ${
                    active ? 'text-indigo-500' : ''
                  }`}
                />
                <span className="leading-none md:ml-4 mt-1 md:mt-0">Home</span>
              </a>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink href="/portfolio">
            {(active) => (
              <a
                className={`px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active ? 'bg-indigo-500 bg-opacity-20' : ''
                }`}
              >
                <CollectionIcon
                  className={`h-5 w-5 opacity-75 ${
                    active ? 'text-indigo-500' : ''
                  }`}
                />
                <span className="leading-none md:ml-4 mt-1 md:mt-0">
                  Portfolio
                </span>
              </a>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink href="/contact">
            {(active) => (
              <a
                className={`px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active ? 'bg-indigo-500 bg-opacity-20' : ''
                }`}
              >
                <ChatIcon
                  className={`h-5 w-5 opacity-75 ${
                    active ? 'text-indigo-500' : ''
                  }`}
                />
                <span className="leading-none md:ml-4 mt-1 md:mt-0">
                  Get in touch
                </span>
              </a>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);
