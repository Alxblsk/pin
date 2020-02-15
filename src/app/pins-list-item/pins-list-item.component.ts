import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface IPinsListItem {
  id: number,
  title: string
}

@Component({
  selector: 'app-pins-list-item',
  templateUrl: './pins-list-item.component.html',
  styleUrls: ['./pins-list-item.component.scss']
})

export class PinsListItemComponent {
  @Input() edit: boolean;
  @Input() item: IPinsListItem;
  @Output() saveEvent = new EventEmitter<IPinsListItem>();

  constructor() {

  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.saveEvent.emit(this.item);
  }
}
