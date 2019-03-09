import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeupComponent } from './timeup.component';

describe('TimeupComponent', () => {
  let component: TimeupComponent;
  let fixture: ComponentFixture<TimeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
