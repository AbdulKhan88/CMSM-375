import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrewComponent } from './add-screw.component';

describe('AddScrewComponent', () => {
  let component: AddScrewComponent;
  let fixture: ComponentFixture<AddScrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
