import { CanActivateAuthGuard } from './can-activate-auth-guard.service';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'login',      component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'detail/:id', component: HeroDetailComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'heroes', component: HeroesComponent, canActivate: [CanActivateAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
