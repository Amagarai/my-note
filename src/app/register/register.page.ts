import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  donne: any;

  constructor(private service: ServiceService, private router : Router, private alertC : AlertController) { }

  ngOnInit() {
  }

  AddUser(data: any){
    if (data.value.pesudo == '' || data.value.password == '' || data.value.confirm == '') {
      this.presentAlert("Erreur","Veuillez remplir tous les champs")
    } else {
      if ( data.value.password == data.value.confirm) {
        return this.service.AddUser(data.value).subscribe(result =>{
          if(result){
            this.donne = result
            this.router.navigate(['home'])
            localStorage.setItem("data", JSON.stringify(this.donne))
          }
        })
      } else {
        this.presentAlert("Incorecte","Les mots de passes ne corespondent pas")
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

}
