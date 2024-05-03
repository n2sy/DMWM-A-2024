import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  myObs$: Observable<string>;

  ngOnInit() {
    this.myObs$ = new Observable((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
      setTimeout(() => {
        observer.error(new Error('Erreur provoqué DMWM-A'));
      }, 8000);
      // setTimeout(() => {
      //   observer.error(new Error('Seconde Erreur provoqué DMWM-A'));
      // }, 10000);
      setTimeout(() => {
        observer.complete();
      }, 10000);
    });

    // this.myObs$.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log('Erreur détecté : ', err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé !');
    //   },
    // });
  }
}
