import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
  
  @Input() items: Array<ItemModel>; 
  @Output() editModeAction = new EventEmitter<ItemModel>();
  @Output() deleteAction = new EventEmitter<ItemModel>();
  @Output() selectedItemAction = new EventEmitter<any>();

  constructor() { }

  onSelectedItem(selectedItem: any) {
    this.selectedItemAction.emit(selectedItem);
  }
  onEditItem(selectedItem: ItemModel) {
    this.editModeAction.emit(selectedItem);
  }
  onDeleteItem(selectedItem: ItemModel) {
    this.deleteAction.emit(selectedItem);
  }

  ngOnInit(): void {
  }

}
