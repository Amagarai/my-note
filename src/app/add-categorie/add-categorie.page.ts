import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {

  segment: any = 'add';
  constructor() { }

  ngOnInit() {
  }

  Evenement(event){
    this.segment= event.detail.value
    console.log(this.segment);
  }
}
