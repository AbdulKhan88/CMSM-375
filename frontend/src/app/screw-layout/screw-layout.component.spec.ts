import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewLayoutComponent } from './screw-layout.component';

describe('ScrewLayoutComponent', () => {
  let component: ScrewLayoutComponent;
  let fixture: ComponentFixture<ScrewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrewLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
