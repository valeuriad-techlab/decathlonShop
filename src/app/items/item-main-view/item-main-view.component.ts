import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-item-main-view',
  templateUrl: './item-main-view.component.html',
  styleUrls: ['./item-main-view.component.less']
})
export class ItemMainViewComponent implements OnInit {

  public items2: Array<ItemModel> = [
    {
      id: 1, 
      name: 'Chaussures',
      quantity: 150,
      weight: 100
    },
    {
      id: 2, 
      name: 'Vélo électrique',
      quantity: 3,
      weight: 1300
    },
    {
      id: 3, 
      name: 'Raquette de tennis',
      quantity: 140,
      weight: 120
    },
    {
      id: 4, 
      name: 'Balle de ping-pong',
      quantity: 3,
      weight: 10
    },
  ];

  selectedItem: ItemModel;
  editedItem: ItemModel;

  constructor() { }

  ngOnInit(): void {
  }

  onEditModeAction(selectedItem: ItemModel) {
    this.editedItem = selectedItem;
  }

  onDeleteAction(selectedItem: ItemModel) {
    this.items2 = this.items2.filter(i => i !== selectedItem);
  }

  onSelectedItemAction(selectedItemId: number) {
    this.selectedItem = this.items2.find(i => i.id === selectedItemId);
  }

  onUpdateOrCreate(item: ItemModel) {
    if (item.id) {
      this.items2 = [
        ...this.items2.filter(i => i.id !== item.id),
        item,
      ];
    } else {
      this.items2.push({
        ...item,
        id: this.items2.length + 1
      })
    }
  }
}
