import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { NumberInput, NumberInputProps } from '@mantine/core';
import { MakeRequired } from '@/shared/helpers/makeRequired.helper';

interface Props extends MakeRequired<NumberInputProps, 'name'> {}

export const FormNumberInput = ({ name, placeholder, ...rest }: Props) => {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { value }, fieldState: { error } }) => (
        <NumberInput
          placeholder={placeholder || 'Введите...'}
          error={error?.message}
          onChange={(fieldValue) => form.setValue(name, fieldValue)}
          value={value}
          {...rest}
        />
      )}
    />
  );
};
