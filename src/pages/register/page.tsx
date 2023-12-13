import {Button, Flex, Group, Stack, Title, Anchor} from '@mantine/core';
import {FormProvider, useForm} from 'react-hook-form';
import {FormInput, FormPasswordInput, FormTagsInput, FormTextarea} from '~/components';
import {FormDatePickerInput} from '~/components/Fields/FormDatePickerInput';
import React from 'react';
import {Link} from "atomic-router-react";

export const RegisterPage = () => {
  const form = useForm({
    defaultValues: {},
  });

  const onSubmit = form.handleSubmit((data) => {
  });

  return (
    <Flex direction="column" justify="center">
      <Title order={2} style={{alignSelf: 'center'}}>
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
            <FormInput name={'name'} label={'Имя и фамилия'} required/>
            <FormTextarea name={'description'} label={'Описание'}/>
            <FormDatePickerInput name={'birthDate'} label={'Дата рождения'}/>
            <FormPasswordInput name={'password'} label={'Пароль'} required/>
            <FormPasswordInput
              name={'passwordConfirmation'}
              label={'Подтвердите пароль'}
              required
            />
            <FormTagsInput
              name={'tags'}
              label="Чем ты занимаешься"
              placeholder="Выберите способности"
              data={['Разработка', 'Дизайн', 'Маркетинг', 'Продажи', 'Управление']}
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
