import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { Header } from './components/header/header';
import { IEducation } from './interfaces/education';
import { Data } from './services/data';
import { Card } from './components/card/card';
import { CardsList } from './components/cards-list/cards-list';
import { Education } from './components/education/education';
import { IExperience } from './interfaces/experience';
import { Experience } from './components/experience/experience';
import { Skill } from './types/skills';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Title } from '@angular/platform-browser';
import { IPerson } from './interfaces/person';
import { CardSelector } from './components/card-selector/card-selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    /* Components */
    Header,
    Card,
    CardsList,
    Education,
    Experience,
    Skills,
    Projects,
    CardSelector,
    /* Angular Material */
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected person!: IPerson;
  protected education!: IEducation[];
  protected experiance!: IExperience[];
  protected hardSkills!: Skill[];
  protected softSkills!: Skill[];

  constructor(
    private _dataServ: Data,
    protected title: Title
  ) {
    this.person = this._dataServ.person;
    this.education = this._dataServ.education;
    this.experiance = this._dataServ.experience;
    this.hardSkills = this._dataServ.hardSkills;
    this.softSkills = this._dataServ.softSkills;
  }

  ngOnInit(): void {
    // Заголовок страницы приложения
    this.title.setTitle(
      this.person.surName.trim() + ' ' +
      this.person.firstName.trim().charAt(0) + '. ' +
      this.person.lastName?.trim().charAt(0) + '.'
    );

  }
}
