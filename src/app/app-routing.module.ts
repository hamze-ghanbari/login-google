import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'admin' , component : AdminComponent , canActivate : [AuthGuard]},
  {path : 'notauthorized', component : NotauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
