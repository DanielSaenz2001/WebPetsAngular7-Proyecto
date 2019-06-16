import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { resolve, reject } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email:string, pass:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData=>resolve(userData),
      err=>reject(err));
    })
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
   
  }

  logout(){
    return this.afAuth.auth.signOut();
  }


}
