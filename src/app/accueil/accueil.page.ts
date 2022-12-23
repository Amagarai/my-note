import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccueilPage implements OnInit {
  @ViewChild('swiper') swiper : SwiperComponent

  user: any;
  List: any;
  length: number;
  cate: any
  constructor( private service: ServiceService ) {}

  ngOnInit(){
    this.user = JSON.parse(localStorage['data']);
    console.log(this.user);
    this.myNote();
    this.ListCate()
  }


  myNote(){
    return this.service.myNote(this.user.id).subscribe(res =>{
      this.List = res
      console.log(res);
      this.length = this.List.length;
    })
  }
  ListCate(){
    return this.service.ListCate(this.user.id).subscribe(res=>{
      this.cate = res
    })
  }
}
