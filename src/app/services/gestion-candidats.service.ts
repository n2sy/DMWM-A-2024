import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'Directeur', 'homer.png'),
    new Candidat(3, 'Lisa', 'Simpson', 20, 'Designer', 'lisa.png'),
    new Candidat(4, 'Nidhal', 'Jelassi', 200, 'Designer'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  addCandidat() {
    this.allCandidats.push(
      new Candidat(3, 'New', 'Candidat', 20, 'Designer', 'lisa.png')
    );
  }
  constructor() {}
}
