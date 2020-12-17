abstract class InputCreator {
    abstract createInput(): Input;

    render() {
        const product = this.createInput();
        return product.render();
    }
}

class InputText extends InputCreator {
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
    render(): string;
}

class InputTypeText implements Input {
    render():string {
        return 'Input with type text';
    }
}

class InputTypeNumber implements Input {
    render():string {
        return 'Input with type number';
    }
}

function createInput(input: InputCreator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(input.render());
    console.log(input);
}

console.log(new InputText(), 'lol')
console.log('App: Launched with the InputText.');
createInput(new InputText());
console.log('');

console.log('App: Launched with the InputNumber.');
createInput(new InputNumber());