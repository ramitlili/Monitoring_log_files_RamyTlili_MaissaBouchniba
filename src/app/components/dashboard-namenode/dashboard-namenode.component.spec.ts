import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNamenodeComponent } from './dashboard-namenode.component';

describe('DashboardNamenodeComponent', () => {
  let component: DashboardNamenodeComponent;
  let fixture: ComponentFixture<DashboardNamenodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardNamenodeComponent]
    });
    fixture = TestBed.createComponent(DashboardNamenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
