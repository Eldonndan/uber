import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './servicios/authentication.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class NoIngresadoGuard implements CanActivate {
  private local!: Storage;
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private storage: Storage
  ) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const data = localStorage.getItem('auth');

    console.log(data);

    if (data) {
      this.router.navigateByUrl('/options');
      return false;
    } else {
      return true;
    }
  }
}
