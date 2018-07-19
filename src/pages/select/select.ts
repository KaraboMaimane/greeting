import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage implements OnInit{
  name: string;
  surname: string;
  gender: string;
  hobby: string = 'Select A Hobby';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  ngOnInit(){
    this.name = this.navParams.get('name');
    this.surname = this.navParams.get('surname');
    this.gender = this.navParams.get('gender');
    console.log(this.name, this.surname, this.gender);
  }
}
