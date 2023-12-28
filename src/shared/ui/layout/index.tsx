import {AppShell, Container} from '@mantine/core';
import {Header, Footer} from "./components";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <AppShell layout="alt" header={{height: 100}}>
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
