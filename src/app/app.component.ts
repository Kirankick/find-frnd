import { Component } from '@angular/core';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fcm: FcmService,
    private platform: Platform
  ) {
    this.enablePrivacyScreen();

    this.platform.ready().then(() => {
      this.fcm.initPush();
    }).catch(e => {
      console.log('error fcm: ', e);
    });
  }

  async enablePrivacyScreen() {
    try {
      await PrivacyScreen.enable();
      console.log('Privacy screen enabled successfully.');
    } catch (error) {
      console.error('Failed to enable privacy screen:', error);
    }
  }
}
