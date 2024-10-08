import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/introduction',
    pathMatch: 'full'
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./pages/userdetails/userdetails.module').then(m => m.UserdetailsPageModule)
  },
  {
    path: 'avatars',
    loadChildren: () => import('./pages/avatars/avatars.module').then(m => m.AvatarsPageModule)
  },
  {
    path: 'profilecompletion',
    loadChildren: () => import('./pages/profilecompletion/profilecompletion.module').then(m => m.ProfilecompletionPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'ad-modal',
    loadChildren: () => import('./pages/ad-modal/ad-modal.module').then(m => m.AdModalPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },  {
    path: 'devicedetails',
    loadChildren: () => import('./pages/devicedetails/devicedetails.module').then( m => m.DevicedetailsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
