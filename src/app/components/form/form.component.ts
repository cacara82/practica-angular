import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formGroup = new FormGroup({
    nom: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    repeatEmail: new FormControl("", [Validators.required, Validators.email]),
    telefon: new FormControl("", [Validators.required, Validators.pattern("^\\+34[0-9]+$")]),
    provincia: new FormControl("", [Validators.required]),
    contacte: new FormControl("", [Validators.required]),
    privacitat: new FormControl("", [Validators.requiredTrue])
  });

  constructor() {

  }

  // Métode d'enviament de formulari
  enviaFormulari() {

    // Imprimim resultats
    console.log("-- ENVIAMENT DE FORMULARI: --");
    console.log("Nom: " + this.formGroup.value.nom);
    console.log("Email: " + this.formGroup.value.email);
    console.log("Repetició d'email: " + this.formGroup.value.repeatEmail);
    console.log("Telèfon: " + this.formGroup.value.telefon);
    console.log("Provincia: " + this.formGroup.value.provincia);
    console.log("Contacte: " + this.formGroup.value.contacte);
    console.log("Privacitat " + this.formGroup.value.privacitat);

    // Els mostrem a sota
    let divResults = document.getElementById("resultsDisplayer")!;
    divResults.innerHTML = "";
    divResults.classList.add("results");
    divResults.innerHTML = `<h2>Resultats</h2>
    <h3>La informació s'ha enviat correctament!</h3>
    <ul>
      <li>Username: ${this.formGroup.value.nom}</li>
      <li>Email: ${this.formGroup.value.email}</li>
      <li>Repetició d'email: ${this.formGroup.value.repeatEmail}</li>
      <li>Telèfon: ${this.formGroup.value.telefon}</li>
      <li>Provincia: ${this.formGroup.value.provincia}</li>
      <li>Contacte: ${this.formGroup.value.contacte}</li>
      <li>Privacitat: ${this.formGroup.value.privacitat}</li>
    </ul>
    `;

  }

}
