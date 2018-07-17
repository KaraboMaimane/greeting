import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreetingsPage } from './greetings';

@NgModule({
  declarations: [
    GreetingsPage,
  ],
  imports: [
    IonicPageModule.forChild(GreetingsPage),
  ],
  exports: [
    GreetingsPage
  ]
})
export class GreetingsPageModule {}
