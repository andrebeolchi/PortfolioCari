import { getStorage } from "@firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "../../firebase.config";

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export { auth, db, signIn, storage };
