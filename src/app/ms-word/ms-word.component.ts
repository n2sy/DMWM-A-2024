import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css',
})
export class MsWordComponent {
  bgColor;
  txtColor;
  txtSize;
  txtFont;
  @ViewChild('sz', { static: true }) newSize;

  ngOnInit() {
    console.log(this.newSize);
  }

  changeSize() {
    console.log(this.newSize);

    let unite = prompt('Veuillez saisir une unité');
    this.txtSize = this.newSize.nativeElement.value + unite;
  }
}
