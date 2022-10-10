/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StashService } from './stash.service';

describe('Service: Stash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StashService]
    });
  });

  it('should ...', inject([StashService], (service: StashService) => {
    expect(service).toBeTruthy();
  }));
});
