import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  
  constructor(private router: Router) {}
  
  sleep (ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async goToLogin() {
    await this.sleep(3000);
    this.router.navigate(['/login']);
  }

}
