import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  // por medio de injecion de dependencias, recibimos del padre (homepage)
  @Input()
  public gifs: Gif[] = [];

}
