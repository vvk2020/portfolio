import { AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-cards-list',
  imports: [],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.css'
})
export class CardsList implements AfterViewInit {

  @ContentChildren(Card) cardsList!: QueryList<Card>;

  ngAfterViewInit(): void {
    console.log("this.cardsList", this.cardsList);
  }

}
