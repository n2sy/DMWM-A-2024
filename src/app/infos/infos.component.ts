import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
    @Input() id;
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

    // this.activatedRoute.paramMap.subscribe({
    //   next: (value) => {
    //     this.candSer.getCandidatByIdAPI(value.get('id')).subscribe({
    //       next: (response: Candidat) => {
    //         this.selectedCandidat = response;
    //       },
    //       error: (err) => {
    //         this.router.navigateByUrl('/not-found');
    //       },
    //     });
    //   },
    // });
   
        this.candSer.getCandidatByIdAPI(this.id).subscribe({
          next: (response: Candidat) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            this.router.navigateByUrl('/not-found');
          },
        });
    
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
      });
    }
  }
}
