import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import membersArray from '../../assets/resources';

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
  membersArray = membersArray;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
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

  nextPage(){
    const alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: `Are you sure you wanna proceed with the following credentials?<br>
      name: ${this.name}<br>
      surname: ${this.surname}<br>
      gender: ${this.gender}<br>
      hobby; ${this.hobby}<br>
      <br>
      Are these correct???
      `,
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Okay',
          handler: () => {
            let member = new Member(this.name, this.surname, this.gender, this.hobby);
            this.membersArray.push(member);
            console.log()
            this.navCtrl.push(ProfilePage, {member: member});
          }
        }
      ]
    });

    alert.present();

  }
}

export class Member{
  name: string;
  surname: string;
  gender: string;
  hobby: string;

  /**
   *
   */
  constructor(Name, Surname, Gender, Hobby) { 
  }
}
