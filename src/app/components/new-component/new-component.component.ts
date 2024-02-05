import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './new-component.component.html',
  // styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public name = 'New Component';
}
