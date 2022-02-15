import { User } from './../Model/User.Model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  users : User[]= [
  {"username": "admin","password":"123","roles":['ADMIN']},
  {"username": "micka","password":"1409","roles":['USER']}
];

public loggedUser :string;
public isloggedIn : boolean =false;
public roles :string[];

  constructor(private route :Router ) { }

SignIn(User :User) :Boolean{

  let validUser:Boolean= false;
  this.users.forEach((curUser)=>{

    if(User.username === curUser.username && User.password ===curUser.password){
      validUser=true;
      this.loggedUser= curUser.username;
      this.isloggedIn=true;
      this.roles =curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
  })
 return validUser;
}




}
