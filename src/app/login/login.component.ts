import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showRegister = true;
  defaultSection = 'dmwm';
  myComment = 'Rien à signaler...';
  showError = false;
  constructor(private authSer: AuthService, private router: Router) {}

  toggleShowEgister() {
    this.showRegister = !this.showRegister;
  }
  submitHandler(f) {
    if (this.showRegister) {
      this.authSer.inscription(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          this.showRegister = false;
          f.reset();
        },
        error: (err) => {
          this.showError = true;
          f.reset();
        },
      });
    } else {
      this.authSer.seConnecter(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          const decoded = jwtDecode(response['token']);
          console.log(decoded);

          localStorage.setItem('access_token', response['token']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError = true;
          f.reset();
        },
      });
    }
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
