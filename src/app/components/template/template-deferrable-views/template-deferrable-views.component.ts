import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { Observable, delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue: boolean = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));
}
