import { Сonvertor } from './form/convertor/convertor';
import { Director } from './form/form-builder/director';
import { FormBuilder } from './form/form-builder/form-builder';
import { FormFacade } from './form/form-facade/form-facade';
import { Singleton } from './form/form-submit/form-submit';

const formJSON = JSON.stringify([
  { type: 'header-level-2', label: 'Name yourself' },
  { type: 'input', fieldType: 'number', label: 'Your name', reference: 'name' },
  { type: 'input', fieldType: 'text', reference: 'name2' },
  { type: 'CTA', label: 'This is it' }
]);

const convertor = new Сonvertor();
const formBuilder = new FormBuilder();
const director = new Director();
const singleton = Singleton.getInstance();

const FormGenerator = new FormFacade(
  convertor,
  formBuilder,
  director,
  singleton
);

FormGenerator.makeForm('#app', formJSON);
