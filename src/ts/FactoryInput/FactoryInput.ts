abstract class InputCreator {
    abstract InputFactory(): Input;

    render():HTMLInputElement {
        const product = this.InputFactory();
        return product.render();
    }
}

export class InputText extends InputCreator {
    InputFactory(): Input {
        return new InputTypeText();
    }
}

class InputNumber extends InputCreator {
    InputFactory(): Input {
        return new InputTypeNumber();
    }
}

interface Input {
    render(): HTMLInputElement;
}

class InputTypeText implements Input {
    render(label?: 'string', reference?:string):HTMLInputElement {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');

      return input
    }
}

class InputTypeNumber implements Input {
    render(label?:string, reference?:string):HTMLInputElement {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');

        return input

    }
}

export function InputFactory(inputType: 'text' | 'number') {
    switch (inputType) {
        case 'text':
            return new InputText().render();
        case 'number':
            return new InputNumber().render();
        default:
            break;
    }    
}

