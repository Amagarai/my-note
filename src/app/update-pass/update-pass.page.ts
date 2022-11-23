import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.page.html',
  styleUrls: ['./update-pass.page.scss'],
})
export class UpdatePassPage implements OnInit {

  user: any;
  donne: any;
  constructor(private service: ServiceService, private alertC: AlertController, private toastController: ToastController, private route: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['data'])
  }
  updatePass(data : NgForm){
    if (data.value.pass == '' || data.value.password == '' ||data.value.passconf == '') {
      this.presentAlert('Erreur', "Remplissez tout les champs")
    } else {
      if (data.value.pass == this.user.password) {
        if (data.value.password == data.value.passconf) {
          this.service.updatePass(this.user.id, data.value).subscribe(res =>{
            this.donne = res;
            localStorage.setItem("data", JSON.stringify(this.donne));
            this.user = JSON.parse(localStorage['data'])
            this.presentToast("Votre mot de passe a été modifier avec success","happy","success")
            this.route.navigate(['profil']);
            data.reset();
          })
        } else {
          this.presentAlert("Erreur", "Le nouveau mot de passe est different de sa confirmation")
        }
      } else {
        this.presentAlert("Erreur","L'ancien mot de passe est incorrect")
      }
    }
  }

  async presentAlert(header : string, message : string) {
    const alert = await this.alertC.create({
      header: header,
      // subHeader: 'Subtitle',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b>'+message+'</b>',
      buttons: ['OK']
    });

    await alert.present();
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
