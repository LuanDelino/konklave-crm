import { signUp, signIn } from '../firebaseConfig';
import { UserCredential } from 'firebase/auth';
import { getErrorMessage } from '../utils/firebaseErrorMessages';

export const registerUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signUp(email, password);
    return userCredential;
  } catch (error: any) {
    console.log("Firebase error code:", error.code); // Adicione este log
    const errorMessage = getErrorMessage(error.code);
    throw new Error(errorMessage);
  }
};

export const loginUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signIn(email, password);
    return userCredential;
  } catch (error: any) {
    console.log("Firebase error code:", error.code); // Adicione este log
    const errorMessage = getErrorMessage(error.code);
    throw new Error(errorMessage);
  }
};
