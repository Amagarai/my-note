import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.page.html',
  styleUrls: ['./edit-compte.page.scss'],
})
export class EditComptePage implements OnInit {

  user: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['data'])
    console.log(this.user);

  }

  updateUser(data){

  }

}
