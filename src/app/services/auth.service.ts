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

  constructor(private route :Router, private router: Router ) { }

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

isAdmin(): Boolean{

  if(!this.roles)
    return false;
  return(this.roles.indexOf('ADMIN') >-1);
  ;
}

logout(){
  this.isloggedIn=false;
  this.loggedUser=undefined;
  this.roles= undefined;

  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedin',String(this.isloggedIn));
  this.router.navigate(['/login'])
}

setLoggedUserFromLocalStorage(login : string) { 
  this.loggedUser = login;
   this.isloggedIn = true; 
   this.getUserRoles(login);
 }

 getUserRoles(username :string){
    this.users.forEach((curUser) => { 
      if( curUser.username == username ) { 

        this.roles = curUser.roles; } 
      }); 
      }




}
