import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA5ZV56227PqLvhTaRSetGvCEz1D9yblSA",
    authDomain: "g3-multimarcas-firebase.firebaseapp.com",
    projectId: "g3-multimarcas-firebase",
    storageBucket: "g3-multimarcas-firebase.appspot.com",
    messagingSenderId: "404766576412",
    appId: "1:404766576412:web:66035e53c162a31b7174d9"
});

const firestore = getFirestore();

export{firestore}
