/**
 * Ссылка с оописанием на достижения в опыте работы
 * @property {string} achievements.description - описание достижения
 * @property {string} achievements.url - url ресурса, подтверждающего достижение
 */
type LinkExperience = {
  description: string,
  url?: string
}

/**
 * Опыт работы
 * @property {string} position - занимаемая должность
 * @property {string} company - компания
 * @property {string[]} [options] - обязанности
 * @property {string} [url] - URL сайта продукта | компании
 * @property {LinkExperience} achievements - ссылки с описанием на достижения
 */
export interface IExperience {
  position: string,
  company: string,
  options?: string[],
  achievements?: LinkExperience[],
}
