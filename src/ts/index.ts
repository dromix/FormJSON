// import {formGenerator} from './formGenerator/formGenerator';
// import {form2} from './formGenerator/formGenerator';
//TODO 
//1) Class Database with singleton pattern;
//2) Classes with different interfaces and use pattern Adapter;
//3) get JSON from database, format:

const formJSON = [
  { type: 'h2', label: 'Name yourself' },
  { type: 'input', fieldType: 'text', label: 'Your name', reference: 'name'},
  { type: 'input', fieldType: 'submit', label: 'This is it'}
]

console.log(formJSON.map(item => item))
//TODO transform JSON to html form 
// user can fill information and by clicking on submit it should go to server

class Form {
  public formElements: HTMLFormElement;
  constructor() {
      this.formElements = document.createElement('form');
  }
}

class FormBuilder {
  form: Form;
  constructor() {
      this.form = new Form()
  }

  addTitle(tag: 'h1'|'h2'|'h3', label: string) {
      const title = document.createElement(tag);
      title.innerText = label;
      this.form.formElements.appendChild(title);
      return this;
  }

  addInput(type: string, label: string, reference:string = null) {
    const inputLabel = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', type);
    inputLabel.setAttribute('for', reference);
    inputLabel.innerText = label;

    if (reference) {
      input.setAttribute('id', reference);
      input.setAttribute('name', reference);
    }
    this.form.formElements.appendChild(inputLabel);
    this.form.formElements.appendChild(input);
    return this;
  }

  addSubmit(label: string) {
    const input = document.createElement('input');
    input.setAttribute('type', 'submit')
    input.setAttribute('value', label)
    this.form.formElements.appendChild(input);
    return this;
  }

  build() {
      return this.form.formElements;
  }
}

const placeForForm = document.querySelector('#form');
const newForm = new FormBuilder().addTitle('h2', 'Hello').addInput('text', 'Your name', 'name').addSubmit('This is it').build();
placeForForm.appendChild(newForm);
