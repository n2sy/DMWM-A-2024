import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultSection = 'dmwm';
  myComment = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f);
  }

  generatePwd(f: NgForm) {
    f.setValue({
      // Equivalent à PUT
      login: '',
      password: 'azerty1234',
      section: '',
      commentaire: '',
      erreurs: '',
    });
  }
  generatePwd2(f: NgForm) {
    f.form.patchValue({
      // Equivalent à PATCH
      password: 'azerty12432',
    });
  }
  reset(f: NgForm) {
    f.reset();
  }
}
