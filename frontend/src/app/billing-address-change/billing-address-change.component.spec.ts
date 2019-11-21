import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAddressChangeComponent } from './billing-address-change.component';

describe('BillingAddressChangeComponent', () => {
  let component: BillingAddressChangeComponent;
  let fixture: ComponentFixture<BillingAddressChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAddressChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAddressChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
