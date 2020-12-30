import FormGenerator from './form/form-facade/form-facade';

const formJSON = JSON.stringify([
  { type: 'header-level-2', label: 'Name yourself' },
  { type: 'input', fieldType: 'number', label: 'Your name', reference: 'name' },
  { type: 'input', fieldType: 'text', reference: 'name2' },
  { type: 'CTA', label: 'This is it' }
]);

FormGenerator.makeForm(formJSON);
