import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-devicedetails',
  templateUrl: './devicedetails.page.html',
  styleUrls: ['./devicedetails.page.scss'],
})
export class DevicedetailsPage implements OnInit {
  public deviceInfo: any = '';
  public deviceId: any = '';
  public batteryInfo: any = '';
  public languageTag: any = '';
  public languageCode: any = '';
  constructor() { this.getDeviceInfo(); }

  ngOnInit() { }

  public getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceId = await Device.getId();
    this.batteryInfo = await Device.getBatteryInfo();
    this.languageTag = await Device.getLanguageTag();
    this.languageCode = await Device.getLanguageCode();
  }
}
