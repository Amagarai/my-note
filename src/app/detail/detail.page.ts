import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
disable: boolean = true;
noteContenu = new FormGroup({
  contenu: new FormControl(),
});
  constructor(private service: ServiceService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.active.snapshot.params['id'];
    this.service.Detail(this.Id).subscribe(res=>{
      this.note = res
    })
  }

  changeDisable(){
    this.disable = false;
  }


  upadateNote(){
    return this.service.updateNote(this.Id, this.noteContenu.value).subscribe(res =>{
      this.disable = true
      this.service.Detail(this.Id).subscribe(result=>{
        this.note = result
      })
    })
  }
}
