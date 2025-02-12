import { Component } from '@angular/core';
import { TextTransformPipe } from '../../pipes/text-transform.pipe';

@Component({
  selector: 'app-pipes',
  imports: [TextTransformPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  exampleText = "Text a modificar per les pipes";
}
