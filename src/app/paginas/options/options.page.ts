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

  constructor(private router: Router, private activatedRuter: ActivatedRoute, private storage: Storage,private auth: AuthenticationService) {}


  public user = {
    email: '',
    password: '',
    name: ''
  };

  async ngOnInit() {
    this.activatedRuter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.email = state['user'].email;
        this.user.password = state['user'].password;
      }
    });

    const users: User[] = await this.storage.get('users')

    const actualuser = users.find(
      (us: User) => us.email === this.user.email && us.password === this.user.password
    );

    if(actualuser){
      this.user = actualuser;
    }
  }

  goBack() {
    this.auth.logout();
  }

}
