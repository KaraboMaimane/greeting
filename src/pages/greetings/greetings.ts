import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GreetingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greetings',
  templateUrl: 'greetings.html',
})
export class GreetingsPage {
  name;
  surname;
  gender: string;
  styles = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetingsPage');
  }

  ionViewDidEnter() {
    this.name = this.navParams.get('name');
    this.surname = this.navParams.get('surname');
  }

  genderCheck(){
    console.log(this.gender)
  }
}
