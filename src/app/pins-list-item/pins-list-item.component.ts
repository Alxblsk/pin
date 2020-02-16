import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

enum EPinsListItemStatus {
  New = "NEW",
  Done = "DONE"
}

export interface IPinsListItem {
  id: number,
  title: string,
  price: number,
  status: EPinsListItemStatus
}

const DEFAULT_PIN_ITEM = {
  title: '',
  price: 0,
  status: EPinsListItemStatus.New
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

  ngOnInit() {
    if (this.edit) {
      this.item = { ...DEFAULT_PIN_ITEM, ...this.item };
    }
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.saveEvent.emit(this.item);
  }
}
