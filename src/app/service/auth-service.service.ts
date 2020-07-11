import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public user;
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user = afAuth.authState;
}

async signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  const info:any = await this.afAuth.auth.signInWithPopup(provider);
  console.log(info);
  this.setStorage(info);
  this.router.navigate(['dashboard'])
}

async signOut() {
  await this.afAuth.auth.signOut();
  localStorage.removeItem('currentUser');
  return this.router.navigate(['/']);
}

setStorage(info) {
  localStorage.setItem('currentUser', JSON.stringify(
    { token: info.credential.accessToken,
      name: info.user.displayName,
      email: info.user.email,
      dp: info.additionalUserInfo.profile.picture  }));
}
getStorage() {
  return JSON.parse(localStorage.getItem('currentUser'));
}


}
