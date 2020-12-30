export interface formProperties {
  type: 'title' | 'input-number' | 'input-text' | 'submit';
  label: string;
  name: 'string';
  tag: string;
}

export interface formSettings {
  type: string;
  label: string;
  reference: string;
  fieldType: string;
}

export interface TitleProps {
  tag: string;
  label: string;
}

export interface Input {
  input: HTMLInputElement;
  label: HTMLLabelElement;
}
