import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import {RouterProvider} from "atomic-router-react";
import { MantineProvider } from '@mantine/core';
import {Pages} from "~/pages";
import {router} from "~/shared/routing.ts";
import {theme} from "~/theme.ts";
import {Layout} from "~/shared/ui";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router}>
        <Layout>
          <Pages />
        </Layout>
      </RouterProvider>
    </MantineProvider>
  );
}
