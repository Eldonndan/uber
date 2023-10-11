import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
})
export class ErrorPagePage {
  @ViewChild('wheel', { read: ElementRef }) wheel!: ElementRef;

  private animation!: Animation;
  constructor(
    private animationCtrl: AnimationController,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.wheel.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateY(0px)' },
        { offset: 0.25, transform: 'translateY(-40px)' },
        { offset: 0.5, transform: 'translateY(-50px)' },
        { offset: 0.75, transform: 'translateY(-40px)' },
        { offset: 1, transform: 'translateY(0px)' },
      ]);

    this.animation.play();
  }

  backmenu() {
    this.router.navigate(['/home']);
  }
}
