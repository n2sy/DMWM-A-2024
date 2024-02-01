import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DMWM-A-2024';
  student; // = "Nidhal";

  traitementDuApp(msg) {
    alert(msg);
  }
}
