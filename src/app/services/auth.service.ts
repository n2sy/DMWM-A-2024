import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) {}
  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }
  inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }
  seDeconnecter() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }
  estConnecte() {
    let token = localStorage.getItem('access_token');
    if (token) return true;
    return false;
  }
}
