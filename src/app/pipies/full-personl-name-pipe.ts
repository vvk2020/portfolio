import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../interfaces/person';

@Pipe({
  name: 'fullPersonlName'
})
export class FullPersonlNamePipe implements PipeTransform {
/**
 * Пайп для однотипного представления ФИО
 * @param person [IPerson] - объект, содержащий текстовые поля с ФИО
 * @returns 'Фамилия Имя Отчество'
 */
  transform(person?: IPerson): string {
    if (!person) return '';
    return [person.surName, person.firstName, person.lastName]
      .filter(part => part?.trim())
      .join(' ');
  }

}
