import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
    },
  },
  components: {
    Toast: {
      baseStyle: {
        container: {
          // Centraliza o toast na tela
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // Adiciona algum padding e margin, se necessário
          padding: '1rem',
        },
      },
    },
  },
});

export default theme;
