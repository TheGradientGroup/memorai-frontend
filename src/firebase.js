import app from 'firebase/app';
import 'firebase/auth';
// import {GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.auth = app.auth();
        this.isLoggedIn = false;
        this.token = null;
    }
    doSignIn() {
        return new Promise((resolve, reject) => { 
            this.auth.signInWithPopup(this.googleProvider).then(() => {
                this.token = this.auth.currentUser.getIdToken();
                this.isLoggedIn = true;
                resolve();
            }).catch(() => reject());
        })
    }
    doSignOut() {
        return new Promise((resolve, reject) => { 
            this.auth.signOut().then(() => {
                this.token = null;
                this.isLoggedIn = false;
                resolve();
            }).catch(() => reject());
        })   
    }
}

export default Firebase;



