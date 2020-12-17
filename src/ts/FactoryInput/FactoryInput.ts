abstract class InputCreator {
    abstract createInput(): Input;

    render():HTMLInputElement {
        const product = this.createInput();
        return product.render();
    }
}

export class InputText extends InputCreator {
    createInput(): Input {
        return new InputTypeText();
    }
}

class InputNumber extends InputCreator {
    createInput(): Input {
        return new InputTypeNumber();
    }
}

interface Input {
    render(): HTMLInputElement;
}

class InputTypeText implements Input {
    render():HTMLInputElement {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');

      return input
    }
}

class InputTypeNumber implements Input {
    render():HTMLInputElement {
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

