/**
 * Проект
 * @property {string} title - название
 * @property {string} [description] - описание
 * @property {string} [url] - url
 * @property {string} [year] - дата создания
 */
export interface IProject {
  title: string;
  description?: string;
  url?: string;
  year?: string;
}

/**
 * Проекты
 * @property {IProject[]} commercial - коммерческие
 * @property {IProject[]} pet - pet
 */
export interface IProjects {
  commercial: IProject[];
  pet: IProject[];
}
