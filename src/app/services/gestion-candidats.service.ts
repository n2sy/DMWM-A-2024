import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'Ingénieur'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'Directeur'),
    new Candidat(3, 'Lisa', 'Simpson', 20, 'Designer'),
    new Candidat(4, 'Nidhal', 'Jelassi', 200, 'Designer'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.allCandidats;
  }
  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidat(newCand) {
    newCand._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    this.allCandidats.push(newCand);
    console.log(this.allCandidats);
  }
  addCandidatAPI(newCand) {
    return this.http.post(this.link + '/', newCand);
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.findIndex((cand) => cand._id == uCand._id);
    this.allCandidats[i] = uCand;
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand._id == id);
    this.allCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }
}
