import { FormProps } from '../../interface/interface';
import { Сonvertor } from '../convertor/convertor';
import { Director } from '../form-builder/director';
import { FormBuilder } from '../form-builder/form-builder';
import { Singleton } from '../form-submit/form-submit';

class FormFacade {
  constructor(
    private convertor: Сonvertor,
    private formBuilder: FormBuilder,
    private director: Director,
    private singleton: Singleton
  ) {}

  makeForm(selector: string, formSettings: string) {
    const formProps: FormProps[] = this.convertor.convert(formSettings);
    const form: HTMLFormElement = this.buildForm(formProps);

    this.renderForm(selector, form);
    this.singleton.connectForm(form);
  }

  clearData() {
    this.singleton.reset();
  }

  private renderForm(selector: string, form: HTMLFormElement) {
    const app = document.querySelector(selector);
    app.appendChild(form);
  }

  private buildForm(objProps: FormProps[]): HTMLFormElement {
    this.director.setBuilder(this.formBuilder);
    this.director.make(objProps);

    return this.formBuilder.build();
  }
}

export { FormFacade };
