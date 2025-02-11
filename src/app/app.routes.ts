import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SharedFieldsComponent } from './components/shared-fields/shared-fields.component';
import { PipesComponent } from './components/pipes/pipes.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Home"},
    {path: "form", component: FormComponent, title: "Form"},
    {path: "sharedFields", component: SharedFieldsComponent, title: "Shared Fields"},
    {path: "pipes", component: PipesComponent, title: "Pipes"}
];
