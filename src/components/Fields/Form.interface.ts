export interface FormInterface {
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  setValue?: any;
}

export interface Option {
  label: string;
  value: string;
}

export interface FormCheckboxGroupProps extends FormInterface {
  options: Option[];
}

export interface FormRadioGroupProps extends FormInterface {
  options: Option[];
}
