import { auth } from './authServices'; // Importa a instância do auth
import { deleteUser as firebaseDeleteUser } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { firestore } from './authServices'; // Importa a instância do firestore

export const deleteUser = async (userId: string) => {
  try {
    const user = auth.currentUser;
    if (user && user.uid === userId) {
      await firebaseDeleteUser(user);
    }

    await deleteDoc(doc(firestore, 'users', userId));
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
  }
};
