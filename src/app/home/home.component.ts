import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { TokenService } from '../token.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup | undefined;
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  

  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    private tokenService : TokenService,
    private router : Router
  ) { }

  ngOnInit() {
    // init the react form object
    // if(this.tokenService.getToken()){
    //   this.router.navigate(['/admin']);
    // }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
     
  }
  

  // Initial implicite flow using OAuth2 protocol
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe(user => {
      this.isLoggedin = (user != null);
      if(user){
        this.socialUser = user;
      this.tokenService.saveToken(this.socialUser.response.access_token);
      console.log(this.socialUser);
      }
    });
  
  }

   
 
 
}
