import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Home"},
    {path: "form", component: FormComponent, title: "Form"}
];
