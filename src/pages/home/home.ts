import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'Calculator'; 
  num1 = '19';
  num2 = '5'; 
  result = 0;

  constructor(public navCtrl: NavController) {

  }

  calculate() {
    this.result = parseInt(this.num1) + parseInt(this.num2);
  }

}
