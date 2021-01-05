import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationCardComponent } from './citation-card.component';

describe('CitationCardComponent', () => {
  let component: CitationCardComponent;
  let fixture: ComponentFixture<CitationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
