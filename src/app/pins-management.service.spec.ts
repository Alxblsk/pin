import { TestBed } from '@angular/core/testing';

import { PinsManagementService, EPinsListItemStatus } from './pins-management.service';

describe('PinsManagementService', () => {
  let service: PinsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have no items by default', () => {
    expect(service.getPins().length).toBe(0);
  });

  it('should return new array every time', () => {
    const pinsOne = service.getPins();
    const pinsTwo = service.getPins();

    expect(pinsOne === pinsTwo).toBeFalse();
  });

  it('should generate new item correctly', () => {
    const newPin = service.generatePin();
    expect(newPin).toEqual({
      id: 1,
      title: '',
      price: 0,
      status: EPinsListItemStatus.New
    });
  });

  it('should store new item correctly', () => {
    const pinsAfterSave = service.savePin(service.generatePin());
    const pinsAfterGet = service.getPins();

    expect(pinsAfterGet.length === pinsAfterSave.length).toBe(true);
    expect(pinsAfterGet[0]).toEqual(pinsAfterSave[0]);
  });
});
