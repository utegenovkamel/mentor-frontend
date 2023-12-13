import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MakeRequired } from '~/shared/helpers';
import { DateInput, DateInputProps } from '@mantine/dates';

interface Props extends MakeRequired<DateInputProps, 'name'> {}

export const FormDatePickerInput = ({ name, placeholder, ...rest }: Props) => {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { value }, fieldState: { error } }) => (
        <DateInput
          locale="RU-ru"
          placeholder={placeholder || 'Выбрать дату'}
          value={value}
          onChange={(fieldValue) => form.setValue(name, fieldValue)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
