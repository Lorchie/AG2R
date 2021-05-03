import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have method clickMessage', () =>{
    component.longer = 2;
    component.clickMessage(1);
    expect(component.radioOptions).toEqual(0);
    component.clickMessage(0);
    expect(component.radioOptions).toEqual(1);

  });

  it('should have method clickRadio', () =>{
    component.clickRadio(1);
    expect(component.clickRadio).toHaveBeenCalled;

  });
});
