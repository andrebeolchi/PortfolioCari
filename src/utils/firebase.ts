import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "../../firebase.config";

const auth = getAuth(app);
const db = getFirestore(app);
const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export { auth, db, signIn };
