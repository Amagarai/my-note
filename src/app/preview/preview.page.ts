import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  constructor(private router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('login');
    },3500);

  }

  ngOnInit() {
  }

}
