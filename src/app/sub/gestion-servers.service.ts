import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServersService {
  private allServers = [
    {
      id: 1,
      nom: 'Ahmed Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Donia Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Ons Server',
      statut: 'online',
    },
  ];

  getAllServers() {
    return this.allServers;
  }

  getServerById(id) {
    return this.allServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
