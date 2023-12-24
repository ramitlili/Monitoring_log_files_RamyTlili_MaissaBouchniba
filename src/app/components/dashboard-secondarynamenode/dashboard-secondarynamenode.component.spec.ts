import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecondarynamenodeComponent } from './dashboard-secondarynamenode.component';

describe('DashboardSecondarynamenodeComponent', () => {
  let component: DashboardSecondarynamenodeComponent;
  let fixture: ComponentFixture<DashboardSecondarynamenodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSecondarynamenodeComponent]
    });
    fixture = TestBed.createComponent(DashboardSecondarynamenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
