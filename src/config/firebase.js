import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBs8VScUzRPeFVe-MNP_BZ2csQyEPJSAbI",
    authDomain: "jajanku-cb527.firebaseapp.com",
    projectId: "jajanku-cb527",
    storageBucket: "jajanku-cb527.appspot.com",
    messagingSenderId: "676616856186",
    appId: "1:676616856186:web:0f57dc15134f285b6bd1c3"
}

const app = initializeApp(firebaseConfig);

export default app;