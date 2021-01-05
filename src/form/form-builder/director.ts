import { FormProps } from '../../interface/interface';
import { FormBuilder } from './form-builder';

export class Director {
  private builder: FormBuilder;

  setBuilder(builder: FormBuilder) {
    this.builder = builder;
    return this;
  }

  make(formSettings: FormProps[]) {
    formSettings.forEach((prop: FormProps) => {
      if (prop.type === 'title') {
        return this.builder.addTitle(prop);
      }

      if (prop.type === 'input-number' || prop.type === 'input-text') {
        return this.builder.addInput(prop);
      }

      if (prop.type === 'submit') {
        return this.builder.addSubmit(prop);
      }
    });
  }
}
