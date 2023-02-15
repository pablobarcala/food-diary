import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutConfComponent } from './logout-conf.component';

describe('LogoutConfComponent', () => {
  let component: LogoutConfComponent;
  let fixture: ComponentFixture<LogoutConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
