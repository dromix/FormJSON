export interface FormSourceSetting {
  type: string;
  label: string;
  reference: string;
  fieldType: string;
}

export interface FormTitle {
  type: 'title';
  label: string;
  tag: string;
}

export interface FormSubmit {
  type: 'submit';
  label: string;
}

export interface FormInputText {
  type: 'input-text';
  label?: string;
  name: string;
}

export interface FormInputNumber {
  type: 'input-number';
  label?: string;
  name: string;
}

export type FormProps =
  | FormTitle
  | FormSubmit
  | FormInputText
  | FormInputNumber;
