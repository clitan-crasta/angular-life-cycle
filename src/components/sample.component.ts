import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BgDirective } from '../directives/bg.directive';

/**
 * Class: SampleComponents
 */

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [],
  imports: [CommonModule, FormsModule, BgDirective],
  standalone: true,
})
export class SampleComponents
  implements OnChanges, OnInit, DoCheck, AfterContentInit
{
  /**
   * Class var: name
   */
  @Input() name: any;

  /**
   * class var: sample
   */

  @Input() sample: string;

  userInput: string = '';

  /**
   * Class Constructor
   *  - always calls once on component load and first in lifecycle
   */

  constructor(private __cd: ChangeDetectorRef) {
    console.log('constructor called');
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
    console.log(simpleChanges);
    console.log('on changes callled');
  }

  /**
   * only call's once for each component load
   * - after ngOnChanges
   * - used int init operation
   * - view is not created in this stage
   */

  ngOnInit(): void {
    this.name = 'clitan';
    this.__cd.detectChanges;
    console.log('on inint called');
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
    console.log('after content init called');
  }
}
