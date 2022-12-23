import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: any
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['data'])
    console.log(this.user);
  }

}
