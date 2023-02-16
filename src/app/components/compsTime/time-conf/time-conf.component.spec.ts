import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConfComponent } from './time-conf.component';

describe('TimeConfComponent', () => {
  let component: TimeConfComponent;
  let fixture: ComponentFixture<TimeConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
