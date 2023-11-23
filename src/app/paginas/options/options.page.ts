import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

interface User {
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  actualUser!: User;

  goToSelection() {
    this.router.navigate(['/seleccion-vehicle']);
  }

  getActualUser() {
    const actual = localStorage.getItem('actualuser');

    if (actual) {
      this.actualUser = JSON.parse(actual);
    } else {
      console.log('no se debería ver este mensaje por ningun motivo');
    }
  }

  ngOnInit() {
    this.getActualUser();
  }

  goBack() {
    this.auth.logout_ls();
  }
}
