import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PinsManagementService, EPinsListItemStatus } from '../pins-management.service';

export interface IPinsListItem {
  id: number;
  title: string;
  price: number;
  status: EPinsListItemStatus;
}

@Component({
  selector: 'app-pins-list-item',
  templateUrl: './pins-list-item.component.html',
  styleUrls: ['./pins-list-item.component.scss']
})

export class PinsListItemComponent implements OnInit {
  @Input() edit: boolean;
  @Input() item: IPinsListItem;
  @Output() saveEvent = new EventEmitter<IPinsListItem>();

  constructor(private pinsManagement: PinsManagementService) {}

  ngOnInit() {
    if (this.edit && !this.item) {
      this.item = this.pinsManagement.generatePin();
    }
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.saveEvent.emit(this.item);
  }
}
