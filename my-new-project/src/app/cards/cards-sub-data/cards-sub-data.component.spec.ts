import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSubDataComponent } from './cards-sub-data.component';

describe('CardsSubDataComponent', () => {
  let component: CardsSubDataComponent;
  let fixture: ComponentFixture<CardsSubDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSubDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSubDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
