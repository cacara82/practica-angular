import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-fill',
  imports: [],
  templateUrl: './comp-fill.component.html',
  styleUrl: './comp-fill.component.css'
})
export class CompFillComponent {
  @Input() missatge: string = ''; // rebem el missatge amb un input
}
