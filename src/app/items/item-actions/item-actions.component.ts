import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../models/item-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-actions',
  templateUrl: './item-actions.component.html',
  styleUrls: ['./item-actions.component.less']
})
export class ItemActionsComponent implements OnInit {

  @Input() item: ItemModel;
  @Output() updateItemEvent = new EventEmitter<ItemModel>();

  get sumbitActionText(): string {
    return !this.item.id ? "Ajouter" : "Modifier";
  }

  constructor() { }

  ngOnInit(): void {
    this.item = new ItemModel();
  }

  onSubmit(form: NgForm) {
    this.updateItemEvent.emit({
      id: this.item.id,
      ...form.value,
    });
  }

  generateNew() {
    this.item = new ItemModel();
  }

}
