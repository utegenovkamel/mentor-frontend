import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { MakeRequired } from '~/shared/helpers';

interface Props extends MakeRequired<PasswordInputProps, 'name'> {}

export const FormPasswordInput = ({ name, placeholder, ...rest }: Props) => {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PasswordInput
          placeholder={placeholder || 'Ваш пароль'}
          error={error?.message}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
};
