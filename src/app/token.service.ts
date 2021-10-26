import { Injectable } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private socialAuthService: SocialAuthService,) { }

  saveToken(token : string){
  //  localStorage.removeItem('token');
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  signOut(){ 
   localStorage.clear();
   this.socialAuthService.signOut();
  }
}
