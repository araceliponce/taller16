import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';

//aqui
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
