import { Component } from '@angular/core';
import { IPinsListItem } from '../pins-list-item/pins-list-item.component';

@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.scss']
})

export class PinsListComponent {
  pinsList: IPinsListItem[];
  isAddingNew: boolean;

  constructor() {
    this.pinsList = [];
    this.isAddingNew = false;
  }

  onPinAdd() {
    this.isAddingNew = true;
  }

  onPinSave(item: IPinsListItem) {
    this.pinsList.push(item);
    this.isAddingNew = false;
  }
}
