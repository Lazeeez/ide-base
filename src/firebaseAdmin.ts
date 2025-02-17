import { getApp, getApps, initializeApp, cert } from 'firebase-admin/app';

// // get this JSON from the Firebase board
// // you can also store the values in environment variables
// // import serviceAccount from './secret.json';

// if (!firebaseAdmin.apps.length) {
//   // firebaseAdmin.initializeApp({
//   //   credential: firebaseAdmin.credential.cert({
//   //     privateKey: serviceAccount.private_key,
//   //     clientEmail: serviceAccount.client_email,
//   //     projectId: serviceAccount.project_id,
//   //   }),
//   //   databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
//   // });
//   // note: export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
// and export FIREBASE_DATABASE_EMULATOR_HOST="localhost:9000"
//   firebaseAdmin.initializeApp({ projectId: 'ide-base' });
// }

if (getApps().length === 0) {
  if (process.env.NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    initializeApp({
      credential: cert({
        projectId: process.env.NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        privateKey: process.env.NEW_FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.NEW_FIREBASE_CLIENT_EMAIL,
      }),
      databaseURL:
        'https://ide-base-default-rtdb.asia-southeast1.firebasedatabase.app',
    });
  } else {
    initializeApp({
      projectId: 'ide-base',
      databaseURL: 'http://127.0.0.1:9000?ns=ide-base-default-rtdb',
    });
  }
}

const firebaseApp = getApp();

export default firebaseApp;
