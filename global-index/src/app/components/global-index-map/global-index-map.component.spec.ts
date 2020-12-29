import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalIndexMapComponent } from './global-index-map.component';

describe('GlobalIndexMapComponent', () => {
  let component: GlobalIndexMapComponent;
  let fixture: ComponentFixture<GlobalIndexMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalIndexMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalIndexMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
