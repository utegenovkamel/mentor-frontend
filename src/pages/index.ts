import {createRoutesView} from "atomic-router-react";
import {LoginRoute} from "~/pages/login";
import {RegisterRoute} from "~/pages/register";
import {UsersRoute} from "~/pages/users";

export const Pages = createRoutesView({
  routes: [LoginRoute, RegisterRoute, UsersRoute],
});