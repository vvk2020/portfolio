import { Component } from '@angular/core';
import { IEducation } from '../../interfaces/education';
import { Data } from '../../services/data';
import { MatStep, MatStepLabel, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatStepLabel,
    MatStep,
    MatIconModule
  ],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  protected education!: IEducation[];

  constructor(private _dataServ: Data) {
    this.education = this._dataServ.education;
  }
}
