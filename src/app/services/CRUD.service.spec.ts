/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CRUDService } from './CRUD.service';

describe('Service: CRUD', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CRUDService]
    });
  });

  it('should ...', inject([CRUDService], (service: CRUDService) => {
    expect(service).toBeTruthy();
  }));
});
