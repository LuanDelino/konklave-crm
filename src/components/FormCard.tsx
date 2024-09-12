import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';
import konlogo from '../assets/img/konlogo.webp';

interface FormCardProps {
    title: string;
    onSubmit: () => void;
    emailValue?: string;
    passwordValue?: string;
    nameValue?: string;
    onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText: string;
    toggleForm: () => void;
    toggleText: string;
}

const FormCard = ({
    title,
    onSubmit,
    emailValue = '',
    passwordValue = '',
    nameValue = '',
    onEmailChange,
    onPasswordChange,
    onNameChange,
    buttonText,
    toggleForm,
    toggleText,
}: FormCardProps) => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} p={8}>
                <Stack align={'center'} spacing={4}>
                    <Image src={konlogo} alt='logo' boxSize="150px" objectFit="contain" />
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        {title}
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        {!title.includes('Logar') && (
                            <FormControl id="name">
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    type="text"
                                    value={nameValue}
                                    onChange={onNameChange}
                                />
                            </FormControl>
                        )}
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={emailValue}
                                onChange={onEmailChange}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input
                                type="password"
                                value={passwordValue}
                                onChange={onPasswordChange}
                            />
                        </FormControl>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={onSubmit}
                        >
                            {buttonText}
                        </Button>
                        <Button
                            mt={4}
                            variant={'link'}
                            onClick={toggleForm}
                        >
                            {toggleText}
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default FormCard;