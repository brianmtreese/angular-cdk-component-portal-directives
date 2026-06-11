import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injector,
  inject,
  inputBinding,
  signal,
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ComponentPortal, DomPortalOutlet} from '@angular/cdk/portal';
import {PaymentHelpComponent} from '../payment-help/payment-help';
import {PortalPanelDirective} from '../portal-panel';

@Component({
  selector: 'app-support-launcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './support-launcher.html',
  styleUrl: './support-launcher.css',
})
export class SupportLauncherComponent {
  private readonly appRef = inject(ApplicationRef);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);

  protected readonly supportOpen = signal(false);

  private hostElement: HTMLElement | null = null;
  private outlet: DomPortalOutlet | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => this.closeSupport());
  }

  protected toggleSupport() {
    this.supportOpen() ? this.closeSupport() : this.openSupport();
  }

  private openSupport() {
    this.hostElement = this.document.createElement('div');
    this.hostElement.classList.add('floating-help');
    this.document.body.append(this.hostElement);

    this.outlet = new DomPortalOutlet(
      this.hostElement,
      this.appRef,
      this.injector,
    );

    this.outlet.attach(
      // new ComponentPortal(PaymentHelpComponent),
        
      new ComponentPortal(
        PaymentHelpComponent,
        null,
        null,
        null,
        undefined,
        [
          {
            type: PortalPanelDirective,
            bindings: [
              inputBinding('ariaLabel', () => 'Floating payment help'),
            ],
          },
        ],
      ),
    );

    this.supportOpen.set(true);
  }

  private closeSupport() {
    this.outlet?.dispose();
    this.outlet = null;

    this.hostElement?.remove();
    this.hostElement = null;

    this.supportOpen.set(false);
  }
}