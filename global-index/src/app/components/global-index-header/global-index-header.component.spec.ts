import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalIndexHeaderComponent } from './global-index-header.component';

describe('GlobalIndexHeaderComponent', () => {
  let component: GlobalIndexHeaderComponent;
  let fixture: ComponentFixture<GlobalIndexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalIndexHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalIndexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
