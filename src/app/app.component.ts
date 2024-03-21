import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showRecipe = true;

  onNavigate(event: string) {
    console.log(event);
    event == 'recipe' ? (this.showRecipe = true) : (this.showRecipe = false);
  }
}
