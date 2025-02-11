import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}
  ]
})
export class PasswordValidationDirective implements Validator {

  constructor() { }

  // Validation method
  validate(control: AbstractControl): ValidationErrors | null {

    let password = control.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    
    return isValid ? null : { passwordInvalid: true };

  }

}


