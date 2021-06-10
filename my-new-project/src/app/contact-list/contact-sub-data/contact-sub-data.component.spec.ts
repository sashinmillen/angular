import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubDataComponent } from './contact-sub-data.component';

describe('ContactSubDataComponent', () => {
  let component: ContactSubDataComponent;
  let fixture: ComponentFixture<ContactSubDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSubDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSubDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
