import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


  user: any;
  List: any;
  length: number;
  constructor(private service: ServiceService) {

  }

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
