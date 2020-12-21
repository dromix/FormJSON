import {Сonvertor} from '../FormatConvertor/Convertor';
import {FormBuilder} from '../FormBuilder/FormBuilder';
import {Director} from '../FormBuilder/Director';
import {Singleton} from '../FormCDA/FormCDA';
class FormFacade {
    private convertor: Сonvertor;
    private formBuilder: FormBuilder;
    private director: Director;
    private singleton: Singleton;

    constructor(convertor: Сonvertor, formBuilder:FormBuilder, director: Director, singleton: Singleton) {
        this.convertor = convertor;
        this.formBuilder = formBuilder;
        this.director = director;
        this.singleton = singleton;
    }

    makeForm(formSettings: string) {
        const objProperties = this.convertor.convert(formSettings);
        const builder = this.formBuilder;
        this.director.setBuilder(builder);
        this.director.make(objProperties);
        const form = builder.build();
        const app = document.querySelector('#app');
        app.appendChild(form);
        this.singleton.connectForm(form);

    }

    clearData() {
        this.singleton.reset();
    }
}

const convertor = new Сonvertor();
const formBuilder = new FormBuilder();
const director = new Director();
const singleton = Singleton.getInstance();
const FormGenerator = new FormFacade(convertor, formBuilder, director, singleton);


export default FormGenerator;