import React, { useEffect } from 'react';
import { ConfirmOverrideModal } from '../src/components/ConfirmOverrideModal';
import { useAtomValue } from 'jotai/utils';
import Dashboard from '../src/components/Dashboard/Dashboard';
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import {
  useNullableUserContext,
  useUserContext,
} from '../src/context/UserContext';
import Image from 'next/image';
import Head from 'next/head';

export default function DashboardPage(): JSX.Element {
  const { userData } = useNullableUserContext();
  //fetch env variable NEW_FIREBASE_CLIENT_EMAIL and print it
  useEffect(() => {
    console.log(process.env.NEW_FIREBASE_CLIENT_EMAIL);
    console.log('Hello');
  }, []);
  return (
    <div className="min-h-full flex flex-col">
      <Head>
        <title>Real-Time Collaborative Online IDE</title>
        <meta
          name="description"
          content="An online IDE designed for competitive programming, with code execution, intellisense, mobile support, realtime collaborative editing, and built-in USACO submissions."
        />
      </Head>
      <ConfirmOverrideModal />
      <div className="flex-1">
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
          <h1 className="text-gray-100 text-2xl md:text-4xl font-black">
            Real-Time Collaborative Online IDE
          </h1>

          <div className="h-6"></div>

          {!userData ? (
            <div className="text-gray-400 mt-6">Loading...</div>
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto text-gray-400 space-y-8">
          <div>
            Looking to get better at USACO? Check out the{' '}
            <a
              href="https://usaco.guide/"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              USACO Guide
            </a>
            !<br />
            Not for commercial use.
          </div>
          <div>
            <Image
              alt="Datadog Logo"
              src="/dd_logo_v_white.svg"
              width={150}
              height={250}
              className="ml-[2px]"
            />
            <p className="mt-2 text-gray-400">
              Infrastructure monitoring powered by Datadog 2. View our{' '}
              <a
                href="https://p.datadoghq.com/sb/fbf273aa-1551-11ef-87da-da7ad0900002-1c22ffc7d27083c1529726831826065e"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                Dashboard
              </a>{' '}
              or learn more about{' '}
              <a
                href="https://github.com/cpinitiative/ide/blob/master/Datadog.md"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                how we use Datadog
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
