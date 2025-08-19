import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../interfaces/person';

@Pipe({
  name: 'shortPersonName'
})
export class ShortPersonNamePipe implements PipeTransform {

/**
 * Пайп для короткого представления ФИО
 * @param person [IPerson] - объект, содержащий текстовые поля с ФИО
 * @returns 'Фамилия И.О.'
 */
  transform(person?: IPerson): string {
    if (!person) return '';
    return [person.surName, person.firstName, person.lastName]
      .filter(part => part?.trim())
      .join(' ');
  }

}
