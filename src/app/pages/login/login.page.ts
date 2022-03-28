import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user=null;

  constructor(public fireAuth: AngularFireAuth, public firebase: AngularFireModule) { 
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user: null;
    });
  }

  ngOnInit() {
  }

  login(){
    this.fireAuth.signInWithPopup(new firebase.
      firebase.auth.GoogleAuthProvider());
  }
}
