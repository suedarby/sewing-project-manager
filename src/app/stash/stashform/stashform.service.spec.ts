/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StashformService } from './stashform.service';

describe('Service: Stashform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StashformService]
    });
  });

  it('should ...', inject([StashformService], (service: StashformService) => {
    expect(service).toBeTruthy();
  }));
});
