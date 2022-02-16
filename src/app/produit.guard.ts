import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard implements CanActivate {

constructor(public AuthService :AuthService ,private route :Router ){}

  canActivate(
  route : ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean{
    if(this.AuthService.isAdmin())
    return true;

    else
    {
      this.route.navigate(['forbiden']);
      return false;
    }
  }
  
}
