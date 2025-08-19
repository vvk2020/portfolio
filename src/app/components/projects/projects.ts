import { Component } from '@angular/core';
import { IProjects } from '../../interfaces/projects';
import { Data } from '../../services/data';
import { DatePipe } from '@angular/common';
import { MatStep, MatStepLabel, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe,
    MatStepperModule,
    MatFormFieldModule,
    MatStepLabel,
    MatStep,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  protected projects!: IProjects;

  constructor(private _dataServ: Data) {
    this.projects = this._dataServ.projects;
  }
}
