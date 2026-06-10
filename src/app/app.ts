import { Component } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout';
import { SupportLauncherComponent } from './support-launcher/support-launcher';

@Component({
  selector: 'app-root',
  imports: [CheckoutComponent, SupportLauncherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
