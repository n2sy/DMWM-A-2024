import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  serverToEdit;
  constructor(
    private activRoute: ActivatedRoute,
    private serService: GestionServersService
  ) {}

  ngOnInit() {
    //this.id = this.activRoute.snapshot.paramMap.get('serverid');
    this.activRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverToEdit = this.serService.getServerById(p.get('serverid'));
      },
    });
  }
}
