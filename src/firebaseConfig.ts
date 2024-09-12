import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Funções para cadastro e login
export const signUp = async (email: string, password: string, name: string): Promise<UserCredential> => {
  try {

    // Cria o usuário
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Cria o documento no Firestore
    const userId = uuidv4(); 
    await setDoc(doc(firestore, 'users', userId), {
      id: userId,
      name: name,
      email: email,
      role: 'CLIENT'
    });

    return userCredential;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const signIn = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};
