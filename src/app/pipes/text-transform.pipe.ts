import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  // Mètode de transformació
  transform(value: string, type: string): string {
    
    // Si no hi ha valor, retornem null
    if (!value) {
      return "";
    }

    // Fem un switch en funció del cas que volguem utilitzar
    switch (type) {
      case "uppercase":
        return value.toUpperCase();
      case "lowercase":
        return value.toLowerCase();
      case "capitalize":
        return value.replace(/\b\w/g, char => char.toUpperCase());
      default:
        return "";

    }
    
  }

}
