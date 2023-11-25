import React from 'react';
import { Anchor, Button, Flex, Group, Stack, Title } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormPasswordInput } from '@/components';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserDto } from '@/shared/services/user/user.interface';
import { AuthService } from '@/shared/services/auth/auth.service';

interface LoginForm extends Pick<UserDto, 'username'> {
  password: string;
}

const validationSchema = yup.object({
  username: yup.string().required('Имя пользователя обязательно'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});

export const LogInPage = () => {
  const form = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = form.handleSubmit(async (values: LoginForm) => {
    const data = await AuthService.login(values);
  });

  return (
    <Flex direction="column" justify="center" mt="10%">
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
