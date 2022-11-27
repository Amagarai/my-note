import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{
Id: number;
note: any;
disable: boolean = true;
noteContenu = new FormGroup({
  contenu: new FormControl(Validators.minLength(2)),
});
  constructor(private service: ServiceService, private active: ActivatedRoute,
     private toastController: ToastController, private alert: AlertController, private router: Router) { }


  ngOnInit() {
    this.Id = this.active.snapshot.params['id'];
    console.log(this.Id);

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
        this.presentToast("Note modifiée","happy","success")
      })
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

  delete(){
    return this.service.delete(this.Id, this.note).subscribe(res =>{
      this.router.navigate(['home'])
    })
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: "Attention",
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b style="color:#FF0000">Voulez-vous vraimen</b>',
      buttons: [
        {
          text: "Non",
          role: 'cancel',
          cssClass: 'danger',
        }, {
          text: "Oui",
          handler: () => {
           this.delete();
          }
        }
      ],
    });

    await alert.present();
  }
}
