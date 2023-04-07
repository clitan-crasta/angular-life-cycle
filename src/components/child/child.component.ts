import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class ChildComponent {
  constructor(private __cd: ChangeDetectorRef) {
    console.log('child constructor called');
  }

  ngOnChanges(simpleChanges: any): void {
    console.log('child on changes callled');
  }

  ngOnInit(): void {
    console.log('child on inint called');
  }
}
