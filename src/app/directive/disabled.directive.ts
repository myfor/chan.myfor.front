import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMfDisabled]'
})
export class DisabledDirective {

  constructor(private el: ElementRef) { }

  @Input('appDisabled')
  set disabled(isDisabled: boolean) {
    this.setDisabled(isDisabled);
  }

  private setDisabled(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
