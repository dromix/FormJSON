import {dataFormat} from '../interface/interface';

export class Сonvertor {

  convert(formSettings:string, format: dataFormat) {
    switch (format) {
      case 'JSON':
        return JSON.parse(formSettings);
      default:
        break;
    }
  }
}

