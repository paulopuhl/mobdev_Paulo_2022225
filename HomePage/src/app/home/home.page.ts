import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Page2Page } from '../page2/page2.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  navigateToPage2() {
    const mensagem = 'Hello from Home Page';
    this.navCtrl.navigateForward(['/page2', { mensagem }]);
  }

  myVariable: string = "We support GREMIO!";
    updateMyValue(){
      this.myVariable = "GREMIO GREMIO GREMIO"
    }
}
