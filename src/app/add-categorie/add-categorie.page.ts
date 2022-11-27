import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {

  segment: any = 'add';
  user: any;
  nom: string;
  List: any;
  constructor(private service: ServiceService, private toast: ToastController, private alert: AlertController) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['data'])
    console.log(this.user);

    this.ListCategorie();
  }

  Evenement(event){
    this.segment= event.detail.value
    console.log(this.segment);
  }
  addCate(data: any){
    if(this.nom == ''){
      this.presentAlert("","Champs vide")
    }else{
      return this.service.AddCategorie(this.user.id, data.value).subscribe(res =>{
        if(res){
          this.presentToast("Activité enregistré")
          this.ListCategorie();
          this.nom = '';
        }
      })
    }
  }

  ListCategorie(){
    return this.service.ListCate(this.user.id).subscribe(res=>{
      this.List = res
    })
  }

  ViewDetail(id: number, cate: any){
    return this.service.ViewDetail(id, cate).subscribe(res =>{
      this.ListCategorie()
    });
  }

  async presentToast(mess:string) {
    const toast = await this.toast.create({
      message: mess,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async presentAlert(header : string, message : string) {
    const alert = await this.alert.create({
      header: header,
      // subHeader: 'Subtitle',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b>'+message+'</b>',
      buttons: ['OK']
    });

    await alert.present();
  }

}
