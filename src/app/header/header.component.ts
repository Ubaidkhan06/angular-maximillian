import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter();

  onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }
}
