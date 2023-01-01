import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: ` <div class="card shadow mb-3">
    <div class="card-body">
      <h4 class="card-title">
        {{ title }}
      </h4>
      <ng-content></ng-content>
    </div>
  </div>`,
  styles: [],
})
export class CardComponent {
  	@Input('title') title = '';
}
