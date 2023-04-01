import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWzj-UzQoP8DrkTmVXzFO_t0NN2xuQxmw",
    authDomain: "react-native-firebase-au-99921.firebaseapp.com",
    projectId: "react-native-firebase-au-99921",
    storageBucket: "react-native-firebase-au-99921.appspot.com",
    messagingSenderId: "571917929531",
    appId: "1:571917929531:web:4f99441a4d560cf160201e"
}

const app = initializeApp(firebaseConfig);

export default app;