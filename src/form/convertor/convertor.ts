import {
  FormInputNumber,
  FormInputText,
  FormProps,
  FormSourceSetting,
  FormSubmit,
  FormTitle
} from '../../interface/interface';

export class Сonvertor {
  convert(sourceSettings: string): FormProps[] {
    const formSettings: FormSourceSetting[] = JSON.parse(sourceSettings);

    const newFormSetting = formSettings.map((prop: FormSourceSetting) => {
      if (prop.type.startsWith('header')) {
        return this.convertTitle(prop);
      }

      if (prop.type === 'input') {
        return this.convertInput(prop);
      }

      if (prop.type === 'CTA') {
        return this.convertSubmit(prop);
      }
    });

    if (!newFormSetting.length) {
      throw new Error('You should provide correct source params');
    }
    return newFormSetting;
  }

  /**
   * function get source prop of title { type: 'header-level-2', label: 'Name yourself' }
   * and return =>
   * { type: 'title', label: 'Name yourself', tag: 'h2' } */
  private convertTitle(prop: FormSourceSetting): FormTitle {
    return {
      ...prop,
      type: 'title',
      tag: `h${prop.type.charAt(prop.type.length - 1)}`
    };
  }

  /**
   * function get prop { type: 'input', fieldType: 'number', label: 'Your name', reference: 'name'}
   * return { type: 'input-number', label: 'Your name', name: 'name' } */
  private convertInput(
    prop: FormSourceSetting
  ): FormInputNumber | FormInputText {
    const { fieldType, reference, ...temp } = prop;
    return { ...temp, type: `input-${fieldType}`, name: reference } as
      | FormInputNumber
      | FormInputText;
  }

  /**  Convert prop to   { type: 'submit', label: 'This is it' } */
  private convertSubmit(prop: FormSourceSetting): FormSubmit {
    return { ...prop, type: 'submit' };
  }
}
