import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  id = 100;

  constructor(private router: Router) {}

  goToServers() {
    this.router.navigateByUrl('/servers'); // routerLink=""
  }

  goToCv() {
    alert('Route Demandé');
    this.router.navigate(['cv']); // [routerLink]="[]"
  }
}
