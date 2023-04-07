import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBg]',
  standalone: true,
})
export class BgDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
