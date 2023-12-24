import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecondaireComponent } from './menu-secondaire.component';

describe('MenuSecondaireComponent', () => {
  let component: MenuSecondaireComponent;
  let fixture: ComponentFixture<MenuSecondaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSecondaireComponent]
    });
    fixture = TestBed.createComponent(MenuSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
