import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  selectedCandidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    // Version 1
    // this.id = this.activatedRoute.snapshot.params['id'];
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // Version 2

    this.activatedRoute.paramMap.subscribe({
      next: (value) => {
        this.selectedCandidat = this.candSer.getCandidatById(value.get('id'));
        if (!this.selectedCandidat) this.router.navigateByUrl('/not-found');
      },
    });
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.selectedCandidat._id);
      this.router.navigateByUrl('/cv');
    }
  }
}
