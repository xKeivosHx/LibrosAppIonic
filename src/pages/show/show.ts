import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  titulo: any;
  autor: any;
  ano: any;
  cover: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = navParams.get('titulo');
    this.autor = navParams.get('autor');
    this.ano = navParams.get('ano');
    this.cover = navParams.get('cover');
    console.log("///////////");
    console.log(this.cover);
    console.log("///////////");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

}
