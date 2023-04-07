import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  @ContentChild('contentRef') compref: ElementRef;
  /**
   * Class Constructor
   *  - always calls once on component load and first in lifecycle
   */
  constructor(private __cd: ChangeDetectorRef) {
    console.log('child constructor called');
  }

  /**
   *  called if there is changes in comp input data
   *
   * simpleChanges - holds 3 states value
   *
   * - cuurentValue
   * - firstChange -- boolean
   * - previousValue
   *
   *
   * *** if first change then previous value will be undefined
   */
  ngOnChanges(simpleChanges: any): void {
    console.log('child on changes callled');
  }

  /**
   * only call's once for each component load
   * - after ngOnChanges
   * - used int init operation
   * - view is not created in this stage
   */

  ngOnInit(): void {
    console.log('child on inint called', this.compref);
  }

  /**
   * Called immediately after ngOnChanges() on every change detection run,
   * and immediately after ngOnInit() on the first run.
   *
   * and on every change event in the do this will trigger
   */
  ngDoCheck(): void {
    console.log('do check called');
  }

  /**
   * Called once after the first ngDoCheck().
   */
  ngAfterContentInit() {
    console.log('after content init called', this.compref);
  }

  ngAfterContentChecked() {
    console.log('after content init called', this.compref);
  }

  ngAfterViewChecked() {
    console.log('after view checked called', this.compref);
  }
}
