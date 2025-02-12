import { Component } from '@angular/core';
import { CompFillComponent } from '../comp-fill/comp-fill.component';

@Component({
  selector: 'app-comp-pare',
  imports: [CompFillComponent],
  templateUrl: './comp-pare.component.html',
  styleUrl: './comp-pare.component.css'
})
export class CompPareComponent {
  missatgePare = "Aquest missatge l'envio des-de'l pare!"; // missatge que enviarem
}
