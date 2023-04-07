import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class ParentComponent {
  /**
   * Class Constructor
   *  - always calls once on component load and first in lifecycle
   */
  constructor(private __cd: ChangeDetectorRef) {
    console.log('parent constructor called');
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
    console.log('parent on changes callled');
  }

  /**
   * only call's once for each component load
   * - after ngOnChanges
   * - used int init operation
   * - view is not created in this stage
   */

  ngOnInit(): void {
    console.log('parent on inint called');
  }
}
