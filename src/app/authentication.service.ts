import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

interface User {
  name: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public autenticado!: boolean;
  private local!: Storage;

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }

  async register(
    password: string,
    email: string,
    name: string
  ): Promise<Boolean> {
    const users = (await this.local?.get('users')) || [];
    const exists = users.find(
      (us: User) => us.email === email && us.password === password
    );

    if (exists) {
      console.log('Este weon ya existe');
      return true;
    } else {
      const nuevo: User = {
        password,
        name,
        email,
      };
      users.push(nuevo);
      await this.local.set('users', users);
      console.log('Ta listo');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
