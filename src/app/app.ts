import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Card,
    CardsList,
    Education,
    Experience,
    Skills,
    Projects,

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
export class App {
  protected education!: IEducation[];
  protected experiance!: IExperience[];
  protected hardSkills!: Skill[];
  protected softSkills!: Skill[];

  constructor(private _dataServ: Data) {
    this.education = this._dataServ.education;
    this.experiance = this._dataServ.experience;
    this.hardSkills = this._dataServ.hardSkills;
    this.softSkills = this._dataServ.softSkills;
  }
}
