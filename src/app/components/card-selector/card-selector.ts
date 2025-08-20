import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CardsList } from '../cards-list/cards-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-selector',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './card-selector.html',
  styleUrl: './card-selector.css'
})
export class CardSelector implements AfterViewInit, OnDestroy {
  @Input() cardsList!: CardsList;
  protected selectorTitle?: string[] = [];
  private cardsTitlesUpdate$?: Subscription; // Подписка на изменение списка заголовков карточек

  ngAfterViewInit(): void {
    // console.log('cardsList', this.cardsList.cardsCount);
    // console.log('his.cardsList.cardsTitles', this.cardsList.cardsTitles);
    // this.selectorTitle = this.cardsList.cardsTitles;

    this.cardsTitlesUpdate$ = this.cardsList.cardsUpdated
      .subscribe(titles => {
        this.selectorTitle = titles;
        console.log('selectorTitle updated:', this.selectorTitle);
      });

  }

  ngOnDestroy(): void {
      this.cardsTitlesUpdate$?.unsubscribe();
  }
}
