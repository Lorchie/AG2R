import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieManuelleComponent } from './saisie-manuelle.component';

describe('SaisieManuelleComponent', () => {
  let component: SaisieManuelleComponent;
  let fixture: ComponentFixture<SaisieManuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieManuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieManuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
