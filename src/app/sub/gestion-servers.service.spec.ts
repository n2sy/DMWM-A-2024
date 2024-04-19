import { TestBed } from '@angular/core/testing';

import { GestionServersService } from './gestion-servers.service';

describe('GestionServersService', () => {
  let service: GestionServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
