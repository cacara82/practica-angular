import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-shared-fields',
  imports: [ReactiveFormsModule],
  templateUrl: './shared-fields.component.html',
  styleUrl: './shared-fields.component.css'
})
export class SharedFieldsComponent {

  // Constructor
  constructor(public calculatorService: CalculatorService) { } // al constructor li passem el service

  // Action type
  actionType: string = '';

  // Form group
  formGroupCompartit = new FormGroup({
    input1: new FormControl(""),
    number1: new FormControl(0, Validators.required),
    number2: new FormControl(0, Validators.required),
    res: new FormControl()
  });

  submit() {
    const num1 = this.formGroupCompartit.get('number1')?.value ?? 0;
    const num2 = this.formGroupCompartit.get('number2')?.value ?? 0;

    let resultado = 0;

    switch (this.actionType) {
      case '+':
        resultado = this.calculatorService.add(num1, num2);
        break;
      case '-':
        resultado = this.calculatorService.subtract(num1, num2);
        break;
      case '*':
        resultado = this.calculatorService.multiply(num1, num2);
        break;
      case '/':
        resultado = this.calculatorService.divide(num1, num2);
        break;
    }

    this.formGroupCompartit.patchValue({ res: resultado });
  }

}
