import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GreetingsPage } from '../greetings/greetings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  surname: string;

  constructor(public navCtrl: NavController) {

  }

  assignName(event){
    this.name = event.target.value;
  }

  assignSurname(event){
    this.surname = event.target.value;
  }

  proceed(){
    this.navCtrl.push( GreetingsPage , {
      name: this.name,
      surname: this.surname
    });
  }
}
