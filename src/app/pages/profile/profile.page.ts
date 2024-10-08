import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/apis/profile.service';
import { AdModalPage } from '../ad-modal/ad-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userData: any;
  public selectedImage: string | null = null
  public nickname: string = '';
  public email: string = '';
  public changeImage: boolean = true;
  public profile = { userid: '', nickname: '', email: '' }

  constructor(private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private prfileservice: ProfileService,
    private navCtrl: NavController) { }


  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userData = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userData'))))
    console.log(this.userData);

    const getEmail: any = JSON.parse(JSON.stringify(localStorage.getItem('userEmail')));

    this.prfileservice.getProfileDetails(getEmail).subscribe(
      (response) => {
        this.profile.nickname = response.nickname;
        this.profile.email = response.email;
        this.profile.userid = response.profileid;
        localStorage.setItem("isActive", "yes")
        // localStorage.removeItem('userEmail')
      },
      (error) => {
        console.error('Error fetching profile details:', error);
      })
  }


  async goToAdd() {
    const modal = await this.modalCtrl.create({
      component: AdModalPage
    });
    return await modal.present();
  }

  public goToSettings() {
    this.router.navigate(['/settings']);
  }
  public goToAboutDosthi() {
    this.router.navigate(['/aboutDosthi']);
  }

  public goToAccount() {
    this.router.navigate(['/account']);
  }

  public goToUserAgreement() {
    this.router.navigate(['/userAgreement']);
  }

  public goToBlockedList() {
    this.router.navigate(['/blockedList']);
  }
  public goToPrivacy() {
    this.router.navigate(['/privacy-policy']);
  }

  public goToWallet() {
    this.router.navigate(['../wallet']);
  }

  public goToCoin() {
    this.router.navigate(['/coin']);
  }

  public toggleMenu() {
    this.menu.toggle('rightMenu');
    // this.router.navigate(['/menu'])
  }

  public userLogout() {
    this.router.navigate(['/login'])
  }

  // FOR Delete Account
  // async confirmDelete() {
  //   try {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Confirm',
  //       message: 'Are you sure you want to delete this item?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Delete canceled');
  //           }
  //         },
  //         {
  //           text: 'OK',
  //           handler: () => {
  //             console.log('Item deleted');
  //             this.router.navigate(['/introduction']);
  //           }
  //         }
  //       ]
  //     });

  //     await alert.present();
  //   } catch (error) {
  //     console.error('Error presenting alert:', error);
  //   }
  // }

}
