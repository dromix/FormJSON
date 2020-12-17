// import {formGenerator} from './formGenerator/formGenerator';
// import {form2} from './formGenerator/formGenerator';
//TODO 
//1) decode json, string to object 
import FormGenerator from '../ts/FormFacade/FormFacade';


const formJSON = JSON.stringify([
  { type: 'header-level-2', label: 'Name yourself' },
  { type: 'input', fieldType: 'number', label: 'Your name', reference: 'name'},
  { type: 'input', fieldType: 'text', reference: 'name2'},
  { type: 'CTA', label: 'This is it'}
])


const newForm = FormGenerator.makeForm(formJSON, 'JSON');
const placeForForm = document.querySelector('#form');
placeForForm.appendChild(newForm);

