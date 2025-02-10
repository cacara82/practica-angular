import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[matchFields]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MatchFieldsDirective),
    multi: true
  }]
})
export class MatchFieldsDirective implements Validator {

  @Input('matchFields') fields: string[] = [];

  // Métode de validació
  validate(control: AbstractControl): ValidationErrors | null {
    
    if (!this.fields || this.fields.length < 2) { // aquí validem que hagin s'hagin passat 2 paràmetres
      return null;
    }

    const [field1, field2] = this.fields; // aquí assignem una llista dels dos valors que tindrem a la variable de fields si han passat l'anterior validació
    const value1 = control.get(field1)?.value; // valor 1
    const value2 = control.get(field2)?.value; // valor 2

    if (value1 !== value2) { // si no coincideixen, error, si coincideixen, null
      return { fieldsMismatch: {"message": "Els dos correus han de coincidir!"} };
    } else {
      return null;
    }

  }

}
