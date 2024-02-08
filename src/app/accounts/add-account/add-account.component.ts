import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  tabOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() AccToHome = new EventEmitter();
  // nameValue = '';
  // statutsValue = '';

  sendNewAccountToHome(inp, sel) {
    console.log(inp, sel);
    this.AccToHome.emit({
      name: inp,
      statut: sel,
    });

    // console.log(this.nameValue, this.statutsValue);
  }
}
