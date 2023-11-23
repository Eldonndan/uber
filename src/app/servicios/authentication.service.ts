import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  password: string;
  email: string;
}
interface Vehicle {
  brand: string;
  model: string;
  year: number;
  type: string;
  plate: string;
  seats: number;
  owner: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  usuarios: User[] = [];
  vehicles: Vehicle[] = [];

  constructor(private router: Router) {
    this.init();
  }

  async init() {}

  register_vehicle_ls(
    brand: string,
    model: string,
    year: number,
    type: string,
    plate: string,
    seats: number,
    owner: string
  ) {
    const vehicles = localStorage.getItem('vehicles');

    if (vehicles) {
      this.vehicles = JSON.parse(vehicles);
    } else {
      this.vehicles = [];
    }

    let vehiculoExistente = false;

    for (const car of this.vehicles) {
      if (car.plate == plate) {
        console.log('este vehiculo ya existe');
        vehiculoExistente = true;
        break;
      }
    }
    if (!vehiculoExistente) {
      const nuevo: Vehicle = {
        brand,
        model,
        year,
        type,
        plate,
        seats,
        owner,
      };

      this.vehicles.push(nuevo);
      console.log('Vehiculo Registrado con exito');

      localStorage.setItem('vehicles', JSON.stringify(this.vehicles));
    }
  }

  // async register_vehicle(
  //   brand: string,
  //   model: string,
  //   year: number,
  //   type: string,
  //   plate: string,
  //   seats: number
  // ): Promise<Boolean> {
  //   const vehicles = (await this.local?.get('vehicles')) || [];
  //   const exists = vehicles.find((vh: Vehicle) => vh.plate === plate);
  //   if (exists) {
  //     console.log('Este auto ya existe');
  //     return true;
  //   } else {
  //     const nuevo: Vehicle = {
  //       brand,
  //       model,
  //       year,
  //       type,
  //       plate,
  //       seats,
  //     };
  //     vehicles.push(nuevo);

  //     localStorage.setItem('vehicles', vehicles);
  //     await this.local.set('vehicles', vehicles);
  //     console.log('Ta listo');
  //     this.router.navigate(['/seleccion-vehicle']);
  //     return false;
  //   }
  // }

  register_user_ls(password: string, email: string, name: string) {
    const users = localStorage.getItem('users');

    if (users) {
      this.usuarios = JSON.parse(users);
    } else {
      this.usuarios = [];
    }

    let usuarioExistente = false;

    for (const user of this.usuarios) {
      if (user.email === email && user.password === password) {
        console.log('Este usuario ya existe');
        usuarioExistente = true;
        break;
      }
    }

    if (!usuarioExistente) {
      const nuevo: User = {
        password,
        name,
        email,
      };
      this.usuarios.push(nuevo);
      console.log('registro con exito');

      localStorage.setItem('users', JSON.stringify(this.usuarios));
      this.router.navigate(['/login']);
    }
  }

  login_ls(email: string, password: string) {
    const users = localStorage.getItem('users');

    if (users) {
      this.usuarios = JSON.parse(users);
    } else {
      this.usuarios = [];
    }

    for (const user of this.usuarios) {
      if (user.email == email && user.password == password) {
        localStorage.setItem('actualuser', JSON.stringify(user));
        var miBooleano = true;
        localStorage.setItem('auth', JSON.stringify(miBooleano));
        this.router.navigate(['/options']);
        return;
      } else {
        console.log('este chamo no existe');
        localStorage.removeItem('actualuser');
      }
    }
  }

  logout_ls() {
    localStorage.removeItem('actualuser');
    localStorage.removeItem('auth');
  }

  // async login(email: string, password: string): Promise<Boolean> {
  //   const users: User[] = (await this.local.get('users')) || [];

  //   const user = users.find(
  //     (us: User) => us.email === email && us.password === password
  //   );

  //   if (user) {
  //     await this.local.set('actualuser', user);
  //     await this.local.set('auth', true);
  //     return true;
  //   } else {
  //     await this.local.remove('actualuser');
  //     await this.local.set('auth', false);
  //     return false;
  //   }
  // }

  // async logout() {
  //   await this.local.remove('actualuser');
  //   await this.local.set('auth', false);
  //   return false;
  // }
}
