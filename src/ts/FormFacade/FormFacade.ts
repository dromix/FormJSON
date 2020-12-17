import {Сonvertor} from '../FormatConvertor/Convertor';
import {FormBuilder, Director} from '../FormBuilder/FormBuilder';
import {dataFormat} from '../interface/interface';

class FormFacade {
    private convertor: Сonvertor;
    private formBuilder: FormBuilder;
    private director: Director;
    constructor(convertor: Сonvertor, formBuilder:FormBuilder, director: Director) {
        this.convertor = convertor;
        this.formBuilder = formBuilder;
        this.director = director;
    }

    makeForm(formSettings: string, format: dataFormat): HTMLFormElement {
        const objProperties = this.convertor.convert(formSettings, format);   
        this.director.setBuilder(formBuilder);
        this.director.make(objProperties);
        const form = this.formBuilder.build();
        return form
    }
}

const convertor = new Сonvertor();
const formBuilder = new FormBuilder();
const director = new Director();
// const singleton = new Singleton();
const FormGenerator = new FormFacade(convertor, formBuilder, director);


export default FormGenerator;