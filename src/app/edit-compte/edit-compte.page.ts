import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.page.html',
  styleUrls: ['./edit-compte.page.scss'],
})
export class EditComptePage implements OnInit {

  user: any;
  person: any;
  constructor(private service: ServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['data']);
    this.Detail();
  }

  updateUser(data){
    return this.service.UpdateCompte(this.user.id, data.value).subscribe(res =>{
      console.log(res);
    })
  }

  Detail(){
    this.service.FindUser(this.user.id).subscribe(res =>{
      this.person = res
      console.log(this.person);
    })
  }

}
