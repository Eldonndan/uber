import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  constructor(private router: Router, private activatedRuter: ActivatedRoute) {}

  public user = {
    email: '',
    password: '',
  };

  ngOnInit() {
    this.activatedRuter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.email = state['user'].email;
        this.user.password = state['users'].password;
        console.log(this.user);
      }
    });
  }
}
