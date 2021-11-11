import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemMainViewComponent } from './item-main-view.component';

describe('ItemMainViewComponent', () => {
  let component: ItemMainViewComponent;
  let fixture: ComponentFixture<ItemMainViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
