// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA3IICuVr7ffFrwqIMmUm8Ir2ukCUkfRbk",
	authDomain: "portfolio-caricp.firebaseapp.com",
	projectId: "portfolio-caricp",
	storageBucket: "portfolio-caricp.appspot.com",
	messagingSenderId: "171535736356",
	appId: "1:171535736356:web:8aa340055734cb158e82b1",
	measurementId: "G-NTYLLL72TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
