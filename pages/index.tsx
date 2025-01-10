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
    console.log(process.env.NEW_FIREBASE_PRIVATE_KEY);
    console.log('Hello');
    console.log(process.env.NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID);
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
    </div>
  );
}
