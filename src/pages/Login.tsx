// pages/AuthPage.tsx
import React, { useState } from 'react';
import FormCard from '../components/FormCard';
import { signIn, signUp } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>(''); // Adicione este estado
    const [loading, setLoading] = useState<boolean>(false); 
    const navigate = useNavigate();
    const toast = useToast();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setName('');
    };

    const handleSubmit = async () => {
        if (!email || !password || (!isLogin && !name)) { // Verifica se o nome está presente
            toast({
                title: "Por favor, preencha todos os campos.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setLoading(true);
        try {
            if (isLogin) {
                await signIn(email, password);
                toast({
                    title: "Login realizado com sucesso",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/home');
            } else {
                await signUp(email, password, name); // Passa o nome ao registrar
                toast({
                    title: "Cadastro realizado com sucesso",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/home');
            }
        } catch (error: any) {
            toast({
                title: "Ocorreu um erro",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormCard
            title={isLogin ? 'Logar no Konklave CRM' : 'Cadastrar Novo Usuario'}
            onSubmit={handleSubmit}
            emailValue={email}
            passwordValue={password}
            nameValue={name}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onNameChange={(e) => setName(e.target.value)}
            buttonText={loading ? 'Processando...' : isLogin ? 'Logar' : 'Registrar'}
            toggleForm={toggleForm}
            toggleText={isLogin ? 'Não tem usuário? Registre-se' : 'Já tem usuário? Entre'}
        />
    );
};

export default AuthPage;
