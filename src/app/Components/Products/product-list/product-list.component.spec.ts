import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRoductListComponent } from './product-list.component';

describe('PRoductListComponent', () => {
  let component: PRoductListComponent;
  let fixture: ComponentFixture<PRoductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRoductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRoductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
