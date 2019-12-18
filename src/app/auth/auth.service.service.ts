import { Injectable, NgZone } from  '@angular/core';
import { auth } from  'firebase/app';

import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
    providedIn:  'root'
})

export  class  AuthService {

  user: User
  constructor(public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

  }

  async  login(email:  string, password:  string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified !== true) {
        this.sendEmailVerification();
        window.alert('Please validate your email address. Kindly check your inbox.');
      } else {
        this.ngZone.run(() => {
          this.router.navigate(['admin/list']);
        });
      }
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  async  loginWithGoogle(){
    await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}