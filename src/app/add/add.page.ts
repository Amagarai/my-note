import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  @ViewChild('select') selectRef: IonSelect
  user: any;
  titre: string;
  date: string;
  contenu: string;
  categorie: string;
  cate: any;
  constructor(private service: ServiceService, private toastController: ToastController, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['data']);
    this.ListCate();
  }

  AddNote(donne){
    return this.service.AddNote(this.user.id, donne.value.id_cate, donne.value).subscribe(result =>{
      this.presentToast('La note a été créé avec success....','happy','success');
      this.titre = '';
      this.date = '';
      this.contenu = '';
      this.categorie = '';
      this.selectRef.placeholder = 'Categorie'

      this.service.FindUser(this.user.id).subscribe(res =>{
        let data : any = res;
        localStorage.setItem("data", JSON.stringify(data))
        this.router.navigate(['home'])
      })
    })
  }

  ListCate(){
    return this.service.ListCate(this.user.id).subscribe(res=>{
      this.cate = res
    })
  }

  async presentToast(text: string, icon: string, color: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 4000,
      icon: icon,
      position: 'top',
      color: color
    });
    toast.present();
  }
}
