// src/layout/default.tsx
'use client'

import React from 'react';
import { Box } from '@chakra-ui/react';
import SimpleSidebar from '../components/SimpleSidebar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <SimpleSidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet /> {/* Renderiza o conteúdo das rotas internas */}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
