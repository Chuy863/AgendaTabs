import { TestBed } from '@angular/core/testing';

import { ConsultaContactService } from './consulta-contact.service';

describe('ConsultaContactService', () => {
  let service: ConsultaContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
