import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodConfComponent } from './food-conf.component';

describe('FoodConfComponent', () => {
  let component: FoodConfComponent;
  let fixture: ComponentFixture<FoodConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
