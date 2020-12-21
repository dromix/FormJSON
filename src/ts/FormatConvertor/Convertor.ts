import {formSettings} from '../interface/interface';

export class Сonvertor {

  convert(formSettings:string):[] {
    const obj = JSON.parse(formSettings);
    return obj.map((item: formSettings) => {
      if (item.type.startsWith('header')) {
          return {...item, type:'title', tag: `h${item.type.charAt(item.type.length-1)}`}
      }

      if (item.type === 'input') {
          const {fieldType, reference, ...temp} = item;
          return {...temp, type: `input-${fieldType}`, name: reference}
      }

      if (item.type === 'CTA') {
          return {...item, type: 'submit'}
      }
    })
  }
}

