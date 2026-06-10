import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-payment-help',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './payment-help.html',
  styleUrl: './payment-help.css',
})
export class PaymentHelpComponent {}