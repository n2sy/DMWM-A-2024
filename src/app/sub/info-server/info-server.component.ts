import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  server;
  disabledEditBtn;
  constructor(
    private activRoute: ActivatedRoute,
    private serService: GestionServersService
  ) {}

  ngOnInit() {
    //this.id = this.activRoute.snapshot.paramMap.get('serverid');
    this.activRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.server = this.serService.getServerById(p.get('serverid'));
      },
    });

    this.activRoute.queryParamMap.subscribe({
      next: (p: ParamMap) => {
        this.disabledEditBtn = p.get('allow') == '1' ? false : true;
      },
    });
  }
}
