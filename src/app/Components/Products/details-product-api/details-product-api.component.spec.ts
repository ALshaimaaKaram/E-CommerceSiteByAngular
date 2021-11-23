import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductApiComponent } from './details-product-api.component';

describe('DetailsProductApiComponent', () => {
  let component: DetailsProductApiComponent;
  let fixture: ComponentFixture<DetailsProductApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProductApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
