import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalIndexCountryCardComponent } from './global-index-country-card.component';

describe('GlobalIndexCountryCardComponent', () => {
  let component: GlobalIndexCountryCardComponent;
  let fixture: ComponentFixture<GlobalIndexCountryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalIndexCountryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalIndexCountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
