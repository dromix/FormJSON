"use strict";
exports.__esModule = true;
var formGenerator_1 = require("./formGenerator/formGenerator");

//TODO 
//1) Class Database with singleton pattern;
//2) Classes with different interfaces and use pattern Adapter;
//3) get JSON from database, format:


var formJSON = [
    { type: 'h2', label: 'Name yourself' },
    { type: 'input', fieldType: 'text', label: 'Your name', reference: 'name' },
    { type: 'input', fieldType: 'submit', label: 'This is it' }
];
//TODO transform JSON to html form 
// user can fill information and by clicking on submit it should go to server
var placeForForm = document.querySelector('#form');
placeForForm.append(formGenerator_1.formGenerator());
