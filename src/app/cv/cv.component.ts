import { Component, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService, GestionRecruesService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  firstSer = inject(FirstService);

  // V1 : injection de dépendances
  //constructor(private firstSer: FirstService) {}

  ngOnInit() {
    this.firstSer.afficherMessage();
  }

  showCandidats() {
    // console.log(this.candSer.getAllCandidats());
  }

  addNewCandidat() {
    // this.candSer.addCandidat();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
