import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeItemComponent } from './time-item.component';

describe('TimeItemComponent', () => {
  let component: TimeItemComponent;
  let fixture: ComponentFixture<TimeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
