import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReferrersComponent } from './all-referrers.component';

describe('AllReferrersComponent', () => {
  let component: AllReferrersComponent;
  let fixture: ComponentFixture<AllReferrersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReferrersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReferrersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
