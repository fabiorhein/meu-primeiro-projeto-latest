import { Component } from '@angular/core';
import { TestComponent } from "../../test/test.component";
import { NewComponent } from "../../new-component/new-component.component";
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-template-binding',
    standalone: true,
    templateUrl: './template-binding.component.html',
    styleUrl: './template-binding.component.scss',
    imports: [FormsModule, NgClass, NgStyle,TestComponent, NewComponent]
})
export class TemplateBindingComponent {
    public name: string = 'Fabio Rhein';
    public age: number = 32;
    public condition = this.age > 1 ? 'Test' : 'Test2';

    public isDisabled = false;

    // public sum(arg1: number, arg2: number) {
    //   return arg1 + arg2;
    // }

    public sum() {
      return this.age++;
    }

    public sub() {
      return this.age--;
    }

    public onKeyDown(event: Event) {
      return console.log(event);
    }

    public onMouseMove(event: MouseEvent) {
      return console.log({
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
}
