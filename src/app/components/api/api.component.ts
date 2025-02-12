import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokeapiService } from '../../services/pokeapi.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-api',
  imports: [ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  pkmnData: any = null;
  favData: any = null;
  num = 1;
  marcatPreferit = false;

  // Form group
  formGroup = new FormGroup({
    pokedex: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1025)])
  });

  // Constructor cridant al service
  constructor(private pokeapiService: PokeapiService, private cookieService: CookieService) {}

  // Métode d'enviament
  envia() {
    this.marcatPreferit = false;
    let divResults = document.getElementById("results")!;
    this.num = Number(this.formGroup.get("pokedex")?.value);
    this.pokeapiService.getPokemon(this.num).subscribe(data => {
      this.pkmnData = data;
    });
  }

  // Métode per marcar com a preferit per a cookies
  marcaPreferit() {
    this.cookieService.set("preferit", JSON.stringify(this.num));
    this.marcatPreferit = true;
  }

  //Ng On init per cridar la api amb el preferit guardat a la cookie
  ngOnInit() {
    this.pokeapiService.getPokemon(Number(this.cookieService.get("preferit"))).subscribe(data => {
      this.favData = data;
    })
  }

}
