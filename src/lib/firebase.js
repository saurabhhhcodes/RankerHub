import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Validate required config values
const requiredConfigKeys = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId'
];

const hasRequiredConfig = requiredConfigKeys.every((key) => Boolean(firebaseConfig[key]));

if (!hasRequiredConfig) {
  console.warn("Firebase is not configured. Auth, database, analytics, and storage services are disabled for this environment.");
}

// Initialize Firebase
const app = hasRequiredConfig ? initializeApp(firebaseConfig) : null;

// Initialize Firebase services
export const auth = app ? getAuth(app) : null;
export const githubProvider = new GithubAuthProvider();

// Configure GitHub Provider with additional scopes if needed
githubProvider.addScope('read:user');
githubProvider.addScope('user:email');
// Uncomment these if you need more GitHub access
// githubProvider.addScope('repo');
// githubProvider.addScope('read:org');

// Set custom parameters for GitHub provider
githubProvider.setCustomParameters({
  // Force GitHub to always show the account selection screen
  // 'prompt': 'select_account',
  // 'allow_signup': 'true'
});

export const db = app ? getFirestore(app) : null;

// Initialize analytics only in the browser, and don't let analytics
// availability crash auth or the rest of Firebase setup.
let analyticsInstance = null;

if (app && typeof window !== "undefined") {
  try {
    analyticsInstance = getAnalytics(app);
  } catch (error) {
    console.warn("Analytics initialization skipped:", error);
  }
}

export const analytics = analyticsInstance;

// Initialize storage (useful for profile pictures, etc.)
export const storage = app ? getStorage(app) : null;

// Helper function to sign in with GitHub
export const signInWithGitHub = async () => {
  if (!auth) {
    throw new Error("Firebase is not configured. Add the required VITE_FIREBASE_* values before signing in.");
  }

  try {
    const result = await signInWithPopup(auth, githubProvider);
    // The signed-in user info
    const user = result.user;
    // This gives you a GitHub Access Token
    const credential = GithubAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    
    // Store additional user data if needed
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      githubAccessToken: accessToken,
      lastLogin: new Date().toISOString(),
    };
    
    // You can save this to Firestore here
    // await saveUserToFirestore(userData);
    
    return { user, accessToken, userData };
  } catch (error) {
    console.error("GitHub sign-in error:", error);
    // Handle specific errors
    if (error.code === 'auth/account-exists-with-different-credential') {
      throw new Error('An account already exists with the same email address but different sign-in credentials.', { cause: error });
    }
    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Sign-in popup was closed before completing.', { cause: error });
    }
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Sign-in popup was blocked by the browser. Please allow popups for this site.', { cause: error });
    }
    throw error;
  }
};

// Helper function to sign out
export const signOutUser = async () => {
  if (!auth) {
    return true;
  }

  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Sign out error:", error);
    throw error;
  }
};

// Helper function to get current user's token
export const getCurrentUserToken = async () => {
  if (!auth) {
    return null;
  }

  const user = auth.currentUser;
  if (user) {
    try {
      const token = await user.getIdToken();
      return token;
    } catch (error) {
      console.error("Error getting user token:", error);
      return null;
    }
  }
  return null;
};

// Helper function to refresh user token
export const refreshUserToken = async () => {
  if (!auth) {
    return null;
  }

  const user = auth.currentUser;
  if (user) {
    try {
      const token = await user.getIdToken(true); // Force refresh
      return token;
    } catch (error) {
      console.error("Error refreshing user token:", error);
      return null;
    }
  }
  return null;
};

// Export initialized app as default
export default app;
