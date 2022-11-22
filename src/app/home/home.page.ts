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
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['data']);
    this.myNote();
  }

  myNote(){
    return this.service.myNote(this.user.id).subscribe(res =>{
      this.List = res
    })
  }

}
