import {Input} from '../interface/interface';
interface ITextInput { 
    label: string;
    name: string;
}

interface INumberInput {
    label: string;
    name: string;
}
class InputText implements ITextInput {
    label: string;
    name: string;

    constructor(label:string, name: string){
        this.label = label;
        this.name = name;
    }

    render(): Input {
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.setAttribute('type', 'text');
        input.setAttribute('name', this.name);
        this.name ? label.setAttribute('for', this.name) : null
        label.innerText = this.label;
        return {input, label};
    }
}

class InputNumber implements INumberInput {
    label: string;
    name: string;

    constructor(label:string, name: string){
        this.label = label;
        this.name = name;
    }

    render(): Input {
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.setAttribute('type', 'number');
        input.setAttribute('name', this.name);
        this.name ? label.setAttribute('for', this.name) : null
        label.innerText = this.label;
        return {input, label};
    }
}
class Factory { 
    static list: {[key:string]: typeof InputText | typeof InputNumber} = {
        text: InputText,
        number: InputNumber
    }

    private getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
    obj[key];

    createInput(type: string, label= '', name=''): Input {
        const InputType = this.getKeyValue(Factory.list)(type)
        const Input = new InputType(label, name);
        return Input.render()
    }
}


export function InputFactory({type='text', label='', name=''}) {
    const factory = new Factory();
    return factory.createInput(type, label, name);
}
