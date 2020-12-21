import { InputFactory } from '../FactoryInput/FactoryInput';
import {FormBuilder} from './FormBuilder';
import {formProperties} from '../interface/interface';

export class Director {
    private builder: FormBuilder;

    setBuilder(builder: FormBuilder) {
        this.builder = builder;
        return this;
    }

    make(formSettings: []) {
        formSettings.forEach((prop: formProperties) => {
            switch (prop.type) {
                case 'title':
                    return this.builder.addTitle({tag: prop.tag, label: prop.label})
                case 'input-number':
                    return this.builder.addInput({...InputFactory({type: 'number', label:prop.label, name:prop.name})});
                case 'input-text': 
                    return this.builder.addInput({...InputFactory({type: 'text', label:prop.label, name:prop.name})});
                case 'submit':
                    return this.builder.addSubmit(prop.label);
                default:
                    throw new Error('You should provide correct form settings');
            }
        }
        );
    }
}