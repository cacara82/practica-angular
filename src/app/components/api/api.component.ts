import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-api',
  imports: [ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  // Form group
  formGroup = new FormGroup({
    pokedex: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1025)])
  });

  // Constructor cridant al service
  constructor(private pokeapiService: PokeapiService) {}

  // Métode d'enviament
  envia() {
    let divResults = document.getElementById("results")!;
    const num = Number(this.formGroup.get("pokedex")?.value);
    this.pokeapiService.getPokemon(num).subscribe(data => {
      divResults.innerHTML = "";
      divResults.classList.add("results");
      divResults.innerHTML = `
        <h4>Pokémon Nº ${num}: ${data.name.toUpperCase()}</h4>
        <div>
          <img src="${data.sprites.front_default}" width="150">
          <img src="${data.sprites.front_shiny}" width="150">
          <img src="${data.sprites.back_default}" width="150">
          <img src="${data.sprites.back_shiny}" width="150">
        </div>
        <div>
          <audio controls>
            <source src="${data.cries.latest}" type="audio/ogg">
          </audio>
        </div>
      `;
    })
  }

}
