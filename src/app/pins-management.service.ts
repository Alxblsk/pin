import { Injectable } from '@angular/core';
import { IPinsListItem } from './pins-list-item/pins-list-item.component';

export enum EPinsListItemStatus {
  New = 'NEW',
  Done = 'DONE'
}

const DEFAULT_PIN_ITEM = {
  title: '',
  price: 0,
  status: EPinsListItemStatus.New
};

@Injectable({
  providedIn: 'root'
})

export class PinsManagementService {
  private pinsList: IPinsListItem[] = [];

  constructor() { }

  generatePin() {
    return { ...DEFAULT_PIN_ITEM, id: this.pinsList.length + 1 };
  }

  savePin(item: IPinsListItem) {
    this.pinsList.push(item);
    return this.getPins();
  }

  getPins() {
    return [...this.pinsList];
  }
}
