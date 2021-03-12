import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconAccueilComponent } from './menu-icon-accueil.component';

describe('MenuIconAccueilComponent', () => {
  let component: MenuIconAccueilComponent;
  let fixture: ComponentFixture<MenuIconAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIconAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIconAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
