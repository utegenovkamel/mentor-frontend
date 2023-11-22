import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TagsInput, TagsInputProps } from '@mantine/core';
import { MakeRequired } from '@/shared/helpers/makeRequired.helper';

interface Props extends MakeRequired<TagsInputProps, 'name'> {}

export const FormTagsInput = ({ name, placeholder, ...rest }: Props) => {
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TagsInput
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
