import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicedetailsPage } from './devicedetails.page';

describe('DevicedetailsPage', () => {
  let component: DevicedetailsPage;
  let fixture: ComponentFixture<DevicedetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
