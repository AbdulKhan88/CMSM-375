import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewDetailsComponent } from './screw-details.component';

describe('ScrewDetailsComponent', () => {
  let component: ScrewDetailsComponent;
  let fixture: ComponentFixture<ScrewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
