import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewListComponent } from './screw-list.component';

describe('ScrewListComponent', () => {
  let component: ScrewListComponent;
  let fixture: ComponentFixture<ScrewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
