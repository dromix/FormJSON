import {InputFactory} from '../FactoryInput/FactoryInput';

export class FormBuilder {
    form: HTMLFormElement;
    constructor() {
        this.form = document.createElement('form')
    }
  
    addTitle(tag: string, label: string) {
        const title = document.createElement(tag);
        title.innerText = label;
        this.form.appendChild(title);
        return this;
    }
  
    addInput(input: HTMLInputElement) {
      this.form.appendChild(input);
      return this;
    }
  
    addSubmit(label: string) {
      const input = document.createElement('input');
      input.setAttribute('type', 'submit')
      input.setAttribute('value', label)
      this.form.appendChild(input);
      return this;
    }
  
    build():HTMLFormElement {
        return this.form;
    }
}

interface formProperties {
    type: 'title' | 'input',
    label: string,
    fieldType: 'text' | 'number'
}

export class Director {
    private builder: FormBuilder;

    setBuilder(builder: FormBuilder) {
        this.builder = builder;
        return this;
    }

    make(formSettings: []) {
        formSettings.forEach((prop: formProperties) => {
            if (prop.type.startsWith('header')) {
                this.builder.addTitle(`h${prop.type.charAt(prop.type.length-1)}`, prop.label)
            }

            if (prop.type.startsWith('input')) {
                switch (prop.fieldType) {
                    case 'text':
                        this.builder.addInput(InputFactory('text'));
                        break;
                    case 'number':
                        this.builder.addInput(InputFactory('number'));
                        break;
                    default:
                        break;
                }
            }
            if (prop.type.startsWith('CTA')) {
                this.builder.addSubmit(prop.label);
            }
            }
        );
    }
}