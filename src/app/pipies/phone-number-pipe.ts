import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  /**
   * Пайп для форматирования номера телефона
   * @param phone {string} - номер телефона в формате `7XXXXXXXXXX`
   * @returns `+7 (XXX) XXX-XX-XX` || ''
   */
  transform(phone: unknown): string {
    if (!phone || typeof (phone) !== 'string') return '';
    const match = phone.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    return match ?
      `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}` : '';
  }

}
