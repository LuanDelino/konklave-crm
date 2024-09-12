interface ErrorMessages {
    [key: string]: string;
  }
  
  const errorMessages: ErrorMessages = {
    'auth/invalid-email': 'O endereço de e-mail é inválido.',
    'auth/user-not-found': 'Nenhum usuário encontrado com esse e-mail.',
    'auth/wrong-password': 'A senha está incorreta.',
    'auth/email-already-in-use': 'Este e-mail já está em uso.',
    'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'auth/operation-not-allowed': 'Operação não permitida.',
    'auth/invalid-credential': 'Credenciais fornecidas são inválidas.',
    // Adicione mais mensagens conforme necessário
  };
  
  export const getErrorMessage = (code: string): string => {
    return errorMessages[code] || 'Ocorreu um erro desconhecido.';
  };
  