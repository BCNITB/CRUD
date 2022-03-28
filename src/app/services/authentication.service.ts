import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  //Sign In with email/password
  signIn(email, password){
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      window.alert(err.message);
    });
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('Saliendo');
    });
  }
}
