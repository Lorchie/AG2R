import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargementDonneComponent } from './chargement-donne.component';

describe('ChargementDonneComponent', () => {
  let component: ChargementDonneComponent;
  let fixture: ComponentFixture<ChargementDonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargementDonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargementDonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
