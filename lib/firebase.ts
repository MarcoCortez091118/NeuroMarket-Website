import { FirebaseApp, FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const hasRequiredFirebaseConfig = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

function logFirebaseWarning(message: string) {
  if (import.meta.env.DEV) {
    console.warn(`[firebase] ${message}`);
  }
}

if (hasRequiredFirebaseConfig) {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    app = null;
    db = null;
    storage = null;
    logFirebaseWarning(
      `Firebase initialization failed. Falling back to non-Firebase mode. ${(error as Error)?.message ?? ''}`,
    );
  }
} else {
  logFirebaseWarning('Firebase is not initialized. Missing one or more VITE_FIREBASE_* environment variables.');
}

export { app, db, storage, hasRequiredFirebaseConfig };
