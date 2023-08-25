import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallenShopViewComponent } from './fallen-shop-view.component';

describe('FallenShopViewComponent', () => {
  let component: FallenShopViewComponent;
  let fixture: ComponentFixture<FallenShopViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FallenShopViewComponent]
    });
    fixture = TestBed.createComponent(FallenShopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
