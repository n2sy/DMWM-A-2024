import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  candidatToUpdate: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (value) => {
        this.candidatToUpdate = this.candSer.getCandidatById(value.get('id'));
      },
    });
  }
  onSubmit(uCand) {
    // uCand._id = this.candidatToUpdate._id;
    console.log(uCand);
    this.candSer.updateCandidat(uCand);
    this.router.navigateByUrl('/cv');
  }
}
