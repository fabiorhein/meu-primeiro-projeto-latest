import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TestComponent } from './components/test/test.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TestComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
  ],
  template: `
    <!-- <router-outlet><
outer-outlet> -->
    <h1>
      Curso de Angular
      <h1>
        <!-- <app-template-variables></app-template-variables> -->
        <!-- <app-template-binding></app-template-binding> -->
        <app-template-control-flow></app-template-control-flow>
      </h1>
    </h1>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
