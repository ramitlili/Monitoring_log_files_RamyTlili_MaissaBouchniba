import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatanodesComponent } from './dashboard-datanodes.component';

describe('DashboardDatanodesComponent', () => {
  let component: DashboardDatanodesComponent;
  let fixture: ComponentFixture<DashboardDatanodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDatanodesComponent]
    });
    fixture = TestBed.createComponent(DashboardDatanodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
