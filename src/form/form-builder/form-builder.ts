import {
  FormInputNumber,
  FormInputText,
  FormSubmit,
  FormTitle
} from '../../interface/interface';
import { createInput } from './input-factory/input-factory';

export class FormBuilder {
  form: HTMLFormElement;
  constructor() {
    this.form = document.createElement('form');
    this.form.setAttribute('action', '#');
  }

  addTitle({ tag = 'h1', label = '' }: FormTitle) {
    const title = document.createElement(tag);

    title.innerText = label;

    this.form.appendChild(title);
    return this;
  }

  addInput(prop: FormInputNumber | FormInputText) {
    let input: HTMLElement = createInput(prop);

    this.form.appendChild(input);
    return this;
  }

  addSubmit({ label = 'Submit' }: FormSubmit) {
    const button = document.createElement('button');

    button.innerText = label;
    button.setAttribute('type', 'submit');

    this.form.appendChild(button);
    return this;
  }

  build(): HTMLFormElement {
    return this.form;
  }
}
