import { TestBed } from '@angular/core/testing';

import { GlobalIndexPopulationDataService } from './global-index-population-data.service';

describe('GlobalIndexPopulationDataService', () => {
  let service: GlobalIndexPopulationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalIndexPopulationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
