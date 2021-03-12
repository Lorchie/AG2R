import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoyanceSanteComponent } from './prevoyance-sante.component';

describe('PrevoyanceSanteComponent', () => {
  let component: PrevoyanceSanteComponent;
  let fixture: ComponentFixture<PrevoyanceSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoyanceSanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoyanceSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
