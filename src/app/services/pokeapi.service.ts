import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokeapi = "https://pokeapi.co/api/v2/pokemon/";

  // Constructor
  constructor(private http: HttpClient) { }

  // Mètode que crida pokeapi amb un get
  getPokemon(num: number): Observable<any> {
    return this.http.get<any>(`${this.pokeapi}${num}`);
  }

}
