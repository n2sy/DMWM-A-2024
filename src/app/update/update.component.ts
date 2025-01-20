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
        this.candSer.getCandidatByIdAPI(value.get('id')).subscribe({
          next: (response: Candidat) => {
            this.candidatToUpdate = response;
          },
        });
      },
    });
  }
  onSubmit(uCand) {
    // uCand._id = this.candidatToUpdate._id;
    console.log(uCand);
    this.candSer.updateCandidatAPI(uCand).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
