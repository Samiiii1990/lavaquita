import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAAFOVmGG-qqtQ-WH3kNeV2DkD_0Umpd3o",
    authDomain: "lavaquita-64c4e.firebaseapp.com",
    projectId: "lavaquita-64c4e",
    storageBucket: "lavaquita-64c4e.appspot.com",
    messagingSenderId: "3287928057",
    appId: "1:3287928057:web:cbb7a802d2426416ae6628"
})

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}