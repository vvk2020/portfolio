import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/person';
import { PORTFOLIO_DATA } from '../../../public/data/portfolio-data';
import { IExperience } from '../interfaces/experience';
import { IEducation } from '../interfaces/education';
import { Skill } from '../types/skills';
import { IProjects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class Data {
  // Сведения о кандидате
  get person(): IPerson {
    return PORTFOLIO_DATA.person;
  }

  // Вакантная должность
  get position(): string {
    return PORTFOLIO_DATA.position;
  }

  // Образование
  get education(): IEducation[] {
    return PORTFOLIO_DATA.education;
  }

  // Опыт работы
  get experience(): IExperience[] {
    return PORTFOLIO_DATA.experience;
  }

  // Професиональные навыки
  get hardSkills(): Skill[] {
    return PORTFOLIO_DATA.hardSkills;
  }

  // Личные качества
  get softSkills(): Skill[] {
    return PORTFOLIO_DATA.softSkills;
  }

  // Реализованные проекты
  get projects(): IProjects {
    return PORTFOLIO_DATA.projects;
  }

}
