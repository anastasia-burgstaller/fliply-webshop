import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css',
  imports: [
    NgIf,
    RouterLink
  ]
})
export class CookieBannerComponent {
  visible = !localStorage.getItem('cookieConsent');

  acceptAll() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.visible = false;
  }

  rejectAll() {
    localStorage.setItem('cookieConsent', 'rejected');
    this.visible = false;
  }
}
