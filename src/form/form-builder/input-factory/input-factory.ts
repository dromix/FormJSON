import { InputNumber } from './input-number';
import { InputText } from './input-text';

class Factory {
  static list: { [key: string]: typeof InputText | typeof InputNumber } = {
    'input-text': InputText,
    'input-number': InputNumber
  };

  private getKeyValue = <T extends object, U extends keyof T>(obj: T) => (
    key: U
  ) => obj[key];

  createInput(type: string, label = '', name = ''): HTMLElement {
    const InputType = this.getKeyValue(Factory.list)(type);
    const Input = new InputType(label, name);

    return Input.render();
  }
}

export function createInput({ type = 'text', label = '', name = '' }) {
  const factory = new Factory();
  return factory.createInput(type, label, name);
}
