import firebase from 'firebase/app'
import 'firebase/storage'
const initializeApp = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: "1:484496212295:web:0b78e5661e558b098d4c62",
    // measurementId: "G-BNYWNLPLBH"
};
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export { storage, firebase as default }

// export default app;