import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'Looping through data';
  myArray = ['this', 'is', 'my', 'first', 'ngFor'];

  constructor(public navCtrl: NavController) {

  }


}
