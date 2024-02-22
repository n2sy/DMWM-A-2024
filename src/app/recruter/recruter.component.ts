import { Component } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues = [];
  constructor(private recSer: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.recSer.tabRecrues;
  }
}
