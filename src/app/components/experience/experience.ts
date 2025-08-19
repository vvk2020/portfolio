import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { IExperience } from '../../interfaces/experience';
import { MatStep, MatStepLabel, MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    MatStepLabel,
    MatStep,
    MatIconModule,
    MatStepperModule
],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  protected experience!: IExperience[];

  constructor(private _dataServ: Data) {
    this.experience = this._dataServ.experience;
  }
}
