import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetailsModalComponent } from './route-details-modal.component';

describe('RouteDetailsModalComponent', () => {
  let component: RouteDetailsModalComponent;
  let fixture: ComponentFixture<RouteDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
