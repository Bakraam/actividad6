import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component: HomeComponent},
  {path:"newuser", component: FormComponent},
  {path:"user/:iduser", component: UserViewComponent},
  {path:"updateuser/:iduser", component: FormComponent},
  {path:"**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
