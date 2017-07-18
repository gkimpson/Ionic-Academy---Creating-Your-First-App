import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 title = 'This is the name of my app'; 
  constructor(public navCtrl: NavController) {

  }

}
