import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanDeactivate<any> {

  // Atribut d'accès
  isAllowed = false;

  // Mètode per permetre accès
  allowAccess() {
    this.isAllowed = true;
  }

  // Método per denegar accès
  denyAccess() {
    this.isAllowed = false;
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const result = window.confirm("Segur que vols sortir?");
    if (result) {
      this.denyAccess();
    } 
    return result;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.isAllowed;
  }
}
