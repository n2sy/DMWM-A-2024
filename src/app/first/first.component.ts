import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  student = 'Gaith';
  age = 25;
  color = 'green';
  hd = false;

  traitement() {
    alert("J'ai été cliqué !");
  }

  traitementDuParent(msg) {
    this.student = msg;
  }
}
