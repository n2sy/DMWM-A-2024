import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  nb = '14';
  selectedStatut = '';

  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('DMWM-1');
    }, 2000);
  });
  tabServers = [
    {
      nom: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 3, 4),
      statut: 'critical',
    },
    {
      nom: 'Testing Development Server',
      type: 'large',
      date_d: new Date(2022, 5, 10),
      statut: 'stable',
    },
    {
      nom: 'Development Server',
      type: 'small',
      date_d: new Date(2020, 3, 4),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
  ];

  addServer() {
    this.tabServers.push({
      nom: 'NEW SERVER',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable', // ? true : false,
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
