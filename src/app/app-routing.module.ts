import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"newuser", component: NewUserComponent},
  {path:"user/:iduser", component: UserViewComponent},
  {path:"updateuser/:iduser", component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
