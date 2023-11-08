import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthenticationService } from './servicios/authentication.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService, private storage: Storage) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean>{

    const data = await this.storage.get('auth');

      if (!data) {
        this.router.navigate(['/home']);
        return false;
      }
      else {
        return true;
      }
  }
}
