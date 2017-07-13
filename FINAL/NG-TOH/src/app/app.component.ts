import {AuthenticationService} from './authentication-service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>

    <a *ngIf="!authService.isLoggedIn()" routerLink="/heroes">Login</a>
    <div *ngIf="authService.isLoggedIn()">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a (click)="doLogout()">Logout</a>
    </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private authService: AuthenticationService, private router: Router) {}
  doLogout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
  
}
