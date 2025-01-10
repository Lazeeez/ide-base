import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/analytics';
import { ConnectionProvider } from '../src/context/ConnectionContext';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { UserProvider } from '../src/context/UserContext';
import { SHOULD_USE_FIREBASE_EMULATOR } from '../src/dev_constants';

const firebaseConfig = {
  apiKey: 'AIzaSyBHDYM6zf7CvqUcfUzD0Djt23zWUPwJz4k',
  authDomain: 'ide-base.firebaseapp.com',
  databaseURL:
    'https://ide-base-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ide-base',
  storageBucket: 'ide-base.firebasestorage.app',
  messagingSenderId: '558487612554',
  appId: '1:558487612554:web:e3b4ce7bb9f3d251179173',
  measurementId: 'G-JPYYPP25NY',
};

if (!firebase.apps?.length) {
  if (SHOULD_USE_FIREBASE_EMULATOR) {
    firebase.initializeApp({
      ...firebaseConfig,
      authDomain: 'localhost:9099',
      databaseURL: 'http://localhost:9000/?ns=ide-base-default-rtdb',
    });
    firebase.auth().useEmulator('http://localhost:9099');
    firebase.database().useEmulator('localhost', 9000);
  } else {
    firebase.initializeApp(firebaseConfig);
    if (typeof window !== 'undefined' && firebase.analytics) {
      firebase.analytics();
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" />
      <UserProvider>
        <ConnectionProvider>
          <Component {...pageProps} />
        </ConnectionProvider>
      </UserProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
