import { Component } from '@angular/core';
import { IPinsListItem } from '../pins-list-item/pins-list-item.component';
import { PinsManagementService } from '../pins-management.service';

@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.scss']
})

export class PinsListComponent {
  pinsList: IPinsListItem[];
  isAddingNew: boolean;

  constructor(private pinsManagement: PinsManagementService) {
    this.pinsList = pinsManagement.getPins();
    this.editModeOff();
  }

  editModeOff() {
    this.isAddingNew = false;
  }

  editModeOn() {
    this.isAddingNew = true;
  }

  onPinAdd() {
    this.editModeOn();
  }

  onPinSave(item: IPinsListItem) {
    this.pinsList = this.pinsManagement.savePin(item);
    this.editModeOff();
  }
}
