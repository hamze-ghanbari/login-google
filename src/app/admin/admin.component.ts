import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
  
    private tokenService : TokenService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  logOut(): void {
    this.tokenService.signOut();
    this.router.navigate(['']);
  }
}
