import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //const data = await this.storage.get('auth');

    const data = localStorage.getItem('auth');

    if (!data) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
