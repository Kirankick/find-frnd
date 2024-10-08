import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.page.html',
  styleUrls: ['./ad-modal.page.scss'],
})
export class AdModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
