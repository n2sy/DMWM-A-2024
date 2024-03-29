import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  id;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Version 1
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // Version 2

    this.activatedRoute.paramMap.subscribe({
      next: (value) => {
        this.id = value.get('id');
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
