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

  addCandidat(newCand) {
    newCand._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    this.allCandidats.push(newCand);
    console.log(this.allCandidats);
  }
  constructor() {}

  updateCandidat(uCand) {
    let i = this.allCandidats.findIndex((cand) => cand._id == uCand._id);
    this.allCandidats[i] = uCand;
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand._id == id);
    this.allCandidats.splice(i, 1);
  }
}
