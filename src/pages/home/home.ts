import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';
import { ShowPage } from '../show/show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  libro: string;
  resultado: any;
  titulo: "hola";
  imprimir: any;
  author_name: any;
  autor: string;

  constructor(public navCtrl: NavController, public http:Http, private toastCtrl:ToastController) {

  }

  search(){
    this.http.get('http://openlibrary.org/search.json?q=' + this.libro).map(res => res.json()).subscribe(data => {
      this.resultado = data.docs;
     console.log(this.resultado);
    });
  }
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: ''+message ,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  showBook(title_suggest, author_name, first_year, cover_i){
    //console.log(this.libro);
    //console.log(author_name);
    this.autor = author_name[0];
    console.log('ionViewDidLoad HomePage');
    console.log(cover_i);

    this.navCtrl.push(ShowPage, {autor: this.autor, titulo: title_suggest, ano: first_year, cover: cover_i});

  }
}
