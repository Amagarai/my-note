import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  user: any;
  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['data'])
    console.log(this.user);

  }

}
