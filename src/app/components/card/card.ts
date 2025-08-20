import { AfterViewInit, Component, ContentChild, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements AfterViewInit {
  private _title?: string;
  @ContentChild('cardTitle') cardTitle!: ElementRef;
  @Input() isVisible: boolean = true;

  ngAfterViewInit(): void {
    if (this.cardTitle) {
      this._title = this.cardTitle?.nativeElement.innerText;
      this.cardTitle && console.log('cardTitle', this.title);
    }
  }

  get title(): string | undefined {
    return this._title;
  }
}

