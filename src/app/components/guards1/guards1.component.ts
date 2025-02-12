import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-guards1',
  imports: [],
  templateUrl: './guards1.component.html',
  styleUrl: './guards1.component.css'
})
export class Guards1Component {

  // Constructor cridant al service
  constructor(private authGuard: AuthGuardService) {}

  // Mètode de submit que ens farà login
  login() {
    this.authGuard.allowAccess();
  }

}
