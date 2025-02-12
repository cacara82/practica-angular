import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'practicaAngular';

  constructor(private authGuard: AuthGuardService) {}

  // Mètode que comprova al service d'autenticació si la propietat isAllowed es true o false.
  isLogged() {
    return this.authGuard["isAllowed"];
  }

}
