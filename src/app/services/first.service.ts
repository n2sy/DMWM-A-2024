import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
    providedIn : 'root'
})
export class FirstService {
  constructor(private secondSer: SecondService) {}

  afficherMessage() {
    console.log('Je suis le First Service');
    this.secondSer.infos();
  }
}
