import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
Id: number;
note: any;
  constructor(private service: ServiceService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.active.snapshot.params['id'];
    this.service.Detail(this.Id).subscribe(res=>{
      this.note = res
    })
  }

}
