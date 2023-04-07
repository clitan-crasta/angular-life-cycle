import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class ParentComponent {
  constructor(private __cd: ChangeDetectorRef) {
    console.log('parent constructor called');
  }

  ngOnChanges(simpleChanges: any): void {
    console.log('parent on changes callled');
  }

  ngOnInit(): void {
    console.log('parent on inint called');
  }
}
