/**
 * Контакт. Если logo есть, то выводится в виде (logo+value), если нет - то (name+value)
 * @property {string} text - текстовое описание контакта ('+7 (917) 693-24-84')
 * @property {string} value - значение контакта ('tel:+79176932484')
 * @property {string} [logo] - ссылка на логотип типа контакта
 */
export interface IContact {
  text: string;
  value: string;
  logo?: string;
}

/**
 * Цели посещения курса
 * @property {string[]} goals - цели посещения курса
 * @property {string} howKnow - откуда унал о курсе
 */
export interface ICourse {
  goals: string[];
  howKnow: string;
}

/**
 * Кандидат
 * @property {string} firstName - имя кандидата
 * @property {string} [lastName] - отчество
 * @property {string} surName - фамилия
 * @property {string} [dateBird] - дата рождения
 * @property {string} [city] - город проживания
 * @property {string} engLevel - уровень английского
 * @property {Object} contacts - контактные данные
 * @property {string} contacts.phone - номер телефона
 * @property {string} contacts.email - email
 * @property {string} contacts.github - github
 * @property {string} contacts.msteams - ms teams
 * @property {ICourse} course - цели посещения курса
 *
 */
export interface IPerson {
  firstName: string,
  lastName?: string | undefined,
  surName: string,
  dateBird?: string;
  city?: string;
  engLevel: string;
  contacts: IContact[];
  course: ICourse;
}
