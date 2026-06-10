import {ChangeDetectionStrategy, Component, computed, inputBinding, signal} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {PaymentHelpComponent} from '../payment-help/payment-help';
import {PortalPanelDirective} from '../portal-panel';

@Component({
  selector: 'app-checkout',
  imports: [CdkPortalOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class CheckoutComponent {
  protected readonly showHelp = signal(false);

  protected readonly helpPortal = computed(() =>
    // this.showHelp() ? new ComponentPortal(PaymentHelpComponent) : null
  
    this.showHelp()
      ? new ComponentPortal(
          PaymentHelpComponent,
          null,
          null,
          null,
          undefined,
          [
            {
              type: PortalPanelDirective,
              bindings: [
                inputBinding('ariaLabel', () => 'Payment help for checkout'),
              ],
            },
          ],
        )
      : null,
  );

  protected toggleHelp() {
    this.showHelp.update(show => !show);
  }
}