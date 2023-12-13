import {Header, Footer} from '~/modules/layout/components';
import {AppShell, Container} from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <AppShell layout="alt" header={{height: 98.55}}>
      <Header/>
      <AppShell.Main>
        <Container>
          {children}
        </Container>
      </AppShell.Main>
      <Footer/>
    </AppShell>
  );
};
