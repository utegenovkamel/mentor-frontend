import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TagsInput, TagsInputProps } from '@mantine/core';
import { MakeRequired } from '~/shared/helpers';

interface Props extends MakeRequired<TagsInputProps, 'name'> {
  urlData?: string;
}

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
