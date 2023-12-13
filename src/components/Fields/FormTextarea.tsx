import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Textarea, TextareaProps, TextInput, TextInputProps } from '@mantine/core';
import { MakeRequired } from '~/shared/helpers';

interface Props extends MakeRequired<TextareaProps, 'name'> {}

export const FormTextarea = ({ name, placeholder, ...rest }: Props) => {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Textarea
          placeholder={placeholder || 'Введите...'}
          error={error?.message}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
};
