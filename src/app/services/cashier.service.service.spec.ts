import { TestBed } from '@angular/core/testing';

import { CashierService } from './cashier.service';
describe('CashierServiceService', () => {
  let service: CashierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
