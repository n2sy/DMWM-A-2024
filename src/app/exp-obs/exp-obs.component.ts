import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  myObs$: Observable<string>;
  subscriptionNumber: Subscription;

  ngOnInit() {
    // this.myObs$ = new Observable((observer: Observer<number>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     count++;
    //     if (count - 1 == 5) observer.complete();
    //     observer.next(count);
    //   }, 1000);
    // });

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
      setTimeout(() => {
        observer.error(new Error('Seconde Erreur provoqué DMWM-A'));
      }, 10000);
      setTimeout(() => {
        observer.complete();
      }, 10000);
    });

    this.subscriptionNumber = this.myObs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur détecté : ', err);
      },
      complete: () => {
        console.log('Flux terminé : la valeur 10 atteinte !');
      },
    });
  }

  ngOnDestroy() {
    this.subscriptionNumber.unsubscribe();
  }
}
