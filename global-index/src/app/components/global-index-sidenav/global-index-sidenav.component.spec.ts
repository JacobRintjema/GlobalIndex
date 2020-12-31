import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalIndexSidenavComponent } from './global-index-sidenav.component';

describe('GlobalIndexSidenavComponent', () => {
  let component: GlobalIndexSidenavComponent;
  let fixture: ComponentFixture<GlobalIndexSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalIndexSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalIndexSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
