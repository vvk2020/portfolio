import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { IPerson } from '../../interfaces/person';
import { FullPersonNamePipe } from '../../pipes/full-person-name-pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FullPersonNamePipe, UpperCasePipe, DatePipe],
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
