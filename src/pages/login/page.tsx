import React from 'react';
import { Anchor, Button, Flex, Group, Stack, Title } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormPasswordInput } from '~/components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginRequest} from "~/shared/services/auth/types.ts";
import {useUnit} from "effector-react";
import {formSubmitted} from "./model.ts";
import {createStore} from "effector";
import {Link} from "atomic-router-react";

const validationSchema = yup.object({
  username: yup.string().required('Имя пользователя обязательно'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});

const $store = createStore(null)


export const LoginPage = () => {
  const [store] = useUnit([$store])
  const form = useForm<LoginRequest>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = form.handleSubmit(async (values: LoginRequest) => {
    formSubmitted(values)
  });

  return (
    <Flex direction="column" justify="center">
      <Title order={2} style={{ alignSelf: 'center' }}>
        Войти
      </Title>

      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <Stack w="50%" mx="auto">
            <FormInput name={'username'} label={'Имя пользователя'} required />
            <FormPasswordInput name={'password'} label={'Пароль'} required />
            <Group justify="space-between">
              <Anchor component={Link} to="/create-account" c="dimmed">
                У вас нету аккаунта? Создать аккаунт
              </Anchor>
              <Button type="submit">Войти</Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Flex>
  );
};
