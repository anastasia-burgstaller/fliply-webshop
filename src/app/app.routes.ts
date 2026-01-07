import {Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';

import { AboutComponent } from './pages/about/about.component';
import { LicenseComponent } from './pages/license/license.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { CopyrightComponent } from './pages/copyright/copyright.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Fliply – Start' },
  { path: 'produkt', component: ProductComponent, title: 'Fliply – Produkt' },
  { path: 'preise', component: PricingComponent, title: 'Fliply – Preise' },
  { path: 'checkout', component: CheckoutComponent, title: 'Fliply – CheckoutComponent' },
  { path: 'success', component: SuccessComponent, title: 'Fliply – Bestätigung' },

  { path: 'about', component: AboutComponent, title: 'Fliply – Über uns' },
  { path: 'lizenz', component: LicenseComponent, title: 'Fliply – Lizenz' },
  { path: 'datenschutz', component: PrivacyComponent, title: 'Fliply – Datenschutz' },
  { path: 'barrierefreiheit', component: AccessibilityComponent, title: 'Fliply – Barrierefreiheit' },
  { path: 'urheberrecht', component: CopyrightComponent, title: 'Fliply – Urheberrecht & Lizenzen' },
  { path: 'kontakt', component: ContactComponent, title: 'Fliply – Kontakt' },
  { path: 'impressum', component: ImprintComponent, title: 'Fliply – Impressum' },

  { path: '**', redirectTo: '' }
];
