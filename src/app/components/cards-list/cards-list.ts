import { AfterViewInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  imports: [Card, CommonModule],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.css'
})
export class CardsList implements AfterViewInit {
  private _cardsTitles: string[] = [];
  private hiddenCards = new Set<string>(); // скрытые карточки

  @Output() cardsUpdated = new EventEmitter<string[]>();
  @ContentChildren(Card) cardsList!: QueryList<Card>;

  ngAfterViewInit(): void {
    console.log('===> CardsList.ngAfterViewInit()');
    this._updateTitles();
  }

  /**
   * Обновление списка заголовков _cardsTitles[] с emit()
   */
  private _updateTitles(): void {
    this._cardsTitles = [];
    this.cardsList?.forEach(card => {
      if (card.title) this._cardsTitles?.push(card.title);
    });
    this.cardsUpdated.emit(this._cardsTitles);
  }

  /**
   * Названия карточек
   */
  get cardsTitles(): string[] | undefined {
    return [...this._cardsTitles];
  }

  /**
   * Количество карточек
   */
  get cardsCount(): number {
    return this.cardsList?.length ?? 0;
  }

  /**
   * Карточки
  */
  get cards(): QueryList<Card> {
    return this.cardsList;
  }

  // Скрыть все карточки
  hideAllCards(): void {
    this.cardsList?.forEach(card => {
      if (card.title) {
        this.hiddenCards.add(card.title);
      }
    });
    this._updateTitles();
  }

  // Проверить видимость карточки
  isCardVisible(title: string): boolean {
    return !this.hiddenCards.has(title);
  }

  // Переключить видимость карточки
  toggleCardByTitle(title: string): void {
    if (this.hiddenCards.has(title)) {
      this.hiddenCards.delete(title);
    } else {
      this.hiddenCards.add(title);
    }
    this._updateTitles();
  }

  // Показать все карточки
  showAllCards(): void {
    this.hiddenCards.clear();
    this._updateTitles();
  }

}
