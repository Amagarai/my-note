import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  donne : any;
  constructor(private service: ServiceService, private router: Router, private alertC: AlertController) { }

  ngOnInit() {
  }

  Login(data){
    if (data.value.pseudo ==='' || data.value.pass ==='') {
      this.presentAlert("Erreur","Remplissez les champs")
    } else {
      return this.service.Login(data.value.pseudo, data.value.pass).subscribe(res =>{
        if (res) {
          this.donne = res
          this.router.navigate(['home']);
          localStorage.setItem("data", JSON.stringify(this.donne))
        } else {
          this.presentAlert("Incorrecte", "Mot de passe ou pseudo incorrecte")
        }
      })
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

}
