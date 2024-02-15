import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'Directeur', 'homer.png'),
    new Candidat(3, 'Lisa', 'Simpson', 20, 'Designer', 'lisa.png'),
    new Candidat(4, 'Nidhal', 'Jelassi', 200, 'Designer'),
  ];
  selectedCandidat: Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
