interface INumberInput {
  label: string;
  name: string;
}

export class InputNumber implements INumberInput {
  constructor(public label: string, public name: string) {}

  render(): HTMLElement {
    const input = this.renderInput();
    const label = this.renderLabel();

    label.append(input);

    return label;
  }

  private renderLabel(): HTMLLabelElement {
    const label = document.createElement('label');

    label.innerText = this.label;

    return label;
  }

  private renderInput(): HTMLInputElement {
    const input = document.createElement('input');

    input.setAttribute('type', 'number');
    input.setAttribute('id', this.name);
    input.setAttribute('name', this.name);

    return input;
  }
}
