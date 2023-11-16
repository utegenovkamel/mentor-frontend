import { Button, Flex, Group, Stack, Title, Anchor } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormPasswordInput, FormTextarea } from '@/components/Fields';
import { FormDatePickerInput } from '@/components/Fields/FormDatePickerInput';
import { Link } from 'react-router-dom';
import React from 'react';

export const CreateAccountPage = () => {
  const form = useForm();

  const onSubmit = form.handleSubmit((data) => {});

  return (
    <Flex direction="column" justify="center">
      <Title order={2} style={{ alignSelf: 'center' }}>
        Создать аккаунт
      </Title>

      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <Stack w="50%" mx="auto">
            <FormInput
              name={'username'}
              label={'Имя пользователя'}
              placeholder={'Например "utegeno_k"'}
              required
            />
            <FormInput name={'name'} label={'Имя и фамилия'} required />
            <FormTextarea name={'description'} label={'Описание'} />
            <FormDatePickerInput name={'birthDate'} label={'Дата рождения'} />
            <FormPasswordInput name={'password'} label={'Пароль'} required />
            <FormPasswordInput
              name={'passwordConfirmation'}
              label={'Подтвердите пароль'}
              required
            />
            <Group justify="space-between">
              <Anchor component={Link} to="/log-in" c="dimmed">
                У вас есть аккаунт? Войти
              </Anchor>
              <Button type="submit">Создать аккаунт</Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Flex>
  );
};
