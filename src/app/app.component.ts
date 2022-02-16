import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'tp_2_gestion_produits';

  constructor(public authService: AuthService,private route : Router){

  }

ngOnInit () {

  let isloggedin: string;
  let loggedUser: string;

  isloggedin= localStorage.getItem('isloggedIn');
  loggedUser = localStorage.getItem('loggedUser');
  if(isloggedin!="true" || !loggedUser)
  this.route.navigate(['/login']);

  else
  this.authService.setLoggedUserFromLocalStorage(loggedUser)
}


  onLogout(){

    this.authService.logout();
  }
 
}
