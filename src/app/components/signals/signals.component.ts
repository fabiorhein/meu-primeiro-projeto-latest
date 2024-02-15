import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Fabio');
  public lastName = signal('Rhein');

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  public array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.firstName());
    });
  }

  /**
   * updateName
   */
  public updateName() {
    return this.firstName.set('João');
  }

  /**
   * updateArray
   */
  public updateArray() {
    this.firstName.update((oldValue) => {
      return "João ..";
    });
    this.array.update((oldVallue: Array<number>) => {
      console.log(oldVallue);
      return [...oldVallue, oldVallue.length + 1]
    });
  }
}
