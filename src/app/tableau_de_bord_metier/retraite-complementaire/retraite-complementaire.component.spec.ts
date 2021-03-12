import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraiteComplementaireComponent } from './retraite-complementaire.component';

describe('RetraiteComplementaireComponent', () => {
  let component: RetraiteComplementaireComponent;
  let fixture: ComponentFixture<RetraiteComplementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetraiteComplementaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraiteComplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
