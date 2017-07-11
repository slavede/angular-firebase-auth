import { Injectable, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;

  constructor() { }

  init(): void {
    const config = {
      apiKey: 'AIzaSyBVBOp4S3UDsc5qBiqIypuJA0KkbDe5_C4',
      authDomain: 'fir-project-1-cbefe.firebaseapp.com',
      databaseURL: 'https://fir-project-1-cbefe.firebaseio.com',
      projectId: 'fir-project-1-cbefe',
      storageBucket: 'fir-project-1-cbefe.appspot.com',
      messagingSenderId: '956787498587'
    };

    firebase.initializeApp(config);
  }

  login(email: string, password: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((successResponse) => {
          successResponse
            .getToken()
            .then((token) => {
              this.token = token;
              resolve(token);
            });
        }, (errorResponse) => {
          console.error('Error while logging in');
          this.token = undefined;
          reject(errorResponse);
        });
    });

    return promise;
  }

  getToken() {
    // this will extend the token, the original one will still work for you
    // but this way, we are assuring that expiration date is extended
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token !== undefined;
  }

}
