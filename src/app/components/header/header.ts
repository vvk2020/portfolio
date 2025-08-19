import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FullPersonlNamePipe } from '../../pipies/full-personl-name-pipe';
import { PhoneNumberPipe } from '../../pipies/phone-number-pipe';
import { Data } from '../../services/data';
import { IPerson } from '../../interfaces/person';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FullPersonlNamePipe, UpperCasePipe, DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected person!: IPerson;
  protected position: string = "";


  constructor(private _dataServ: Data) {
    this.person = this._dataServ.person;
    this.position = this._dataServ.position;
  }
}
