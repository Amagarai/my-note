import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  user: any;
  List: any;
  length: number;

  constructor(private service: ServiceService) {}

  ngOnInit(){
    this.user = JSON.parse(localStorage['data']);
    console.log(this.user);
    this.myNote();
  }

  myNote(){
    return this.service.myNote(this.user.id).subscribe(res =>{
      this.List = res
      this.length = this.List.length;
    })
  }

}
