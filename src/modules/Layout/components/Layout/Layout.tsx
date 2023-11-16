import { Header, Footer } from '@/modules/Layout/components';
import { Outlet } from 'react-router-dom';
import { AppShell, Container } from '@mantine/core';

export const Layout = () => {
  return (
    <AppShell header={{ height: 98.55 }}>
      <Header />
      <AppShell.Main my={10}>
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
};
