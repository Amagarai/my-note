import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild('swiper') swiper : SwiperComponent

  user: any;
  List: any;
  length: number;
  cate: any
  list_cate : any;
  search: boolean = false;
  constructor( private service: ServiceService ) {}

  ngOnInit(){
    this.user = JSON.parse(localStorage['data']);
    this.myNote();
    this.ListCate()
    console.log("home");
  }


  myNote(){
    return this.service.myNote(this.user.id).subscribe(res =>{
      this.List = res
      this.length = this.List.length;
    })
  }
  ListCate(){
    return this.service.ListCate(this.user.id).subscribe(res=>{
      this.cate = res
    })
  }

  NoteByCate(id :number){
    return this.service.findBtCate(id, this.user.id).subscribe(res =>{
      this.list_cate = res
      this.search = true;
    })
  }

  normalAcceuil(){
    this.search = false;
  }

  refresh(){
    this.myNote();
    this.ListCate()
    this.search = false
  }

}
