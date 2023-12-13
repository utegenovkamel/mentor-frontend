import {attach, createEvent, createStore, sample} from "effector";
import {authService, AuthResponse, LoginRequest} from "~/shared/services";
import {routes} from "~/shared/routing.ts";

const loginFx = attach({effect: authService.loginFx});

export const $loginPending = loginFx.pending

export const formSubmitted = createEvent<LoginRequest>()

export const $authData = createStore<AuthResponse | null>(null)

sample({
  clock: formSubmitted,
  target: loginFx,
})

sample({
  clock: loginFx.doneData,
  target: $authData
})