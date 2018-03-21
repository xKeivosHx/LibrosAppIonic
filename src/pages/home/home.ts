import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  libro: string;
  resultado: any;

  constructor(public navCtrl: NavController, public http:Http, private toastCtrl:ToastController) {

  }

  search(){
    this.http.get('http://openlibrary.org/search.json?q=' + this.libro).map(res => res.json()).subscribe(data => {
      this.resultado = data.docs;
      console.log(this.resultado);
     
      console.log(this.resultado.length );
      console.log("///////////////////////////////////////////////////");
      for (var i = 0; i < this.resultado.length; i++){
        console.log(this.resultado[i].title_suggest);
      }
      console.log("///////////////////////////////////////////////////");
      
      console.log("///////////////////////////////////////////////////");
      for (var a = 0; a < this.resultado.length; a++){
        console.log(this.resultado[a].first_publish_year);
      }
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

}
