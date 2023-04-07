import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SampleComponents } from './components/sample.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SampleComponents, ChildComponent, ParentComponent],
  template: `
    <app-parent  *ngIf="isChild"></app-parent>
    <app-child *ngIf="isChild"></app-child>
    <button (click)='toggleChild()'>Click Me</button>
  `,
})
export class App {
  isChild = true;

  toggleChild() {
    this.isChild = !this.isChild;
  }
}

bootstrapApplication(App);
