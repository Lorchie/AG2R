import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChargementDonneComponent } from './chargement-donne.component';

describe('ChargementDonneComponent', () => {
  let component: ChargementDonneComponent;
  let fixture: ComponentFixture<ChargementDonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
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

  it('should not empty', () => {
    expect(component.isEmpty(0) === false);
  });

  it('should is empty', () => {
    expect(component.isEmpty('test') === true);
  });

  it('should is empty2', () => {
    expect(component.isEmpty('') === true);
  });

  it('should not empty1', () => {
    expect(component.isEmpty(10) === false);
  });

});
