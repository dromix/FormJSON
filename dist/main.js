(()=>{console.log([{type:"h2",label:"Name yourself"},{type:"input",fieldType:"text",label:"Your name",reference:"name"},{type:"input",fieldType:"submit",label:"This is it"}].map((function(e){return e})));var e=function(){this.formElements=document.createElement("form")},t=function(){function t(){this.form=new e}return t.prototype.addTitle=function(e,t){var n=document.createElement(e);return n.innerText=t,this.form.formElements.appendChild(n),this},t.prototype.addInput=function(e,t,n){void 0===n&&(n=null);var r=document.createElement("label"),i=document.createElement("input");return i.setAttribute("type",e),r.setAttribute("for",n),r.innerText=t,n&&(i.setAttribute("id",n),i.setAttribute("name",n)),this.form.formElements.appendChild(r),this.form.formElements.appendChild(i),this},t.prototype.addSubmit=function(e){var t=document.createElement("input");return t.setAttribute("type","submit"),t.setAttribute("value",e),this.form.formElements.appendChild(t),this},t.prototype.build=function(){return this.form.formElements},t}(),n=document.querySelector("#form"),r=(new t).addTitle("h2","Hello").addInput("text","Your name","name").addSubmit("This is it").build();n.appendChild(r)})();
//# sourceMappingURL=main.js.map