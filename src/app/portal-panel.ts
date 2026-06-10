import {afterNextRender, Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appPortalPanel]',
  host: {
    role: 'region',
    '[attr.aria-label]': 'ariaLabel()',
    tabindex: '-1',
  },
})
export class PortalPanelDirective {
  readonly ariaLabel = input('');
  private readonly elementRef = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}