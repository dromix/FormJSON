import {TitleProps} from '../interface/interface';
import {Input} from '../interface/interface';
export class FormBuilder {
    form: HTMLFormElement;
    constructor() {
        this.form = document.createElement('form');
        this.form.setAttribute('action', '#');
    }
  
    addTitle({tag='h1', label=''}:TitleProps) {
        const title = document.createElement(tag);
        title.innerText = label;
        this.form.appendChild(title);
        return this;
    }
  
    addInput({input, label}: Input) {
      if (label) {
        this.form.appendChild(label)
      }
      this.form.appendChild(input);
      return this;
    }
  
    addSubmit(label: string = 'Submit') {
      const button = document.createElement('button');
      button.setAttribute('type', 'submit');
      button.innerText = label;
      this.form.appendChild(button);
      return this;
    }
  
    build():HTMLFormElement {
        return this.form;
    }
}
