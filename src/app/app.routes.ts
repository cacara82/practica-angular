import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SharedFieldsComponent } from './components/shared-fields/shared-fields.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ApiComponent } from './components/api/api.component';
import { Guards1Component } from './components/guards1/guards1.component';
import { Guards2Component } from './components/guards2/guards2.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CompPareComponent } from './components/comp-pare/comp-pare.component';
import { Comp404Component } from './components/comp404/comp404.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Home"},
    {path: "form", component: FormComponent, title: "Form"},
    {path: "sharedFields", component: SharedFieldsComponent, title: "Shared Fields"},
    {path: "pipes", component: PipesComponent, title: "Pipes"},
    {path: "api", component: ApiComponent, title: "PokéAPI - HttpClient"},
    {path: "guards1", component: Guards1Component, title: "Guards 1 - Activate"},
    {path: "guards2", component: Guards2Component, title: "Guards 2 - Access Granted", canActivate: [AuthGuardService], canDeactivate: [AuthGuardService]},
    {path: "pare", component: CompPareComponent, title: "Comunicació Pare-Fill"},
    {path: "**", component: Comp404Component, title: "404"}
];
