import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input() name: string = 'My Monster';
  @Input() hp: number = 40;
  @Input() figureCaption: string = 'N.001 Monster';
  @Input() attackName: string = 'Geo Impact';
  @Input() attackStrengh: number = 60;
  @Input() attackDescription: string =
    "description de l'attaque Geo impact blablabla ...";
}
