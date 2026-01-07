import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Header } from './shared/header/header';
import Footer from './shared/footer/footer';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CookieBannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('fliply-webshop');

  private router = inject(Router);

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        document.getElementById('main')?.focus();
      });
  }
}
