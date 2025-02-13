import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    static nombreSinNumeros(control: AbstractControl): ValidationErrors | null {
        const tieneNumeros = /\d/.test(control.value);
        return tieneNumeros ? { tieneNumeros: true } : null;
    }

}