import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImageComponent } from './item-image.component';

describe('ItemImageComponent', () => {
  let component: ItemImageComponent;
  let fixture: ComponentFixture<ItemImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemImageComponent]
    });
    fixture = TestBed.createComponent(ItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
