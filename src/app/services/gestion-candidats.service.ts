import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'Ingénieur'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'Directeur'),
    new Candidat(3, 'Lisa', 'Simpson', 20, 'Designer'),
    new Candidat(4, 'Nidhal', 'Jelassi', 200, 'Designer'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  addCandidat() {
    this.allCandidats.push(
      new Candidat(3, 'New', 'Candidat', 20, 'Designer', 'lisa.png')
    );
  }
  constructor() {}
}
