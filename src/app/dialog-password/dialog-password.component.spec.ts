import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogPasswordComponent } from './dialog-password.component';
import { ApiCallService } from '../API/api-call.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('DialogPasswordComponent', () => {
  let component: DialogPasswordComponent;
  let fixture: ComponentFixture<DialogPasswordComponent>;
  let apiService : ApiCallService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
          ApiCallService
        }
      ],
      declarations: [ DialogPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.get(ApiCallService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method wrong checkPassword', () => {
    let role1 = {
      role: 'error',
      message: 'password no exist'
    }

    spyOn(apiService, 'checkpassword').and.returnValue(of(role1));
    component.checkPassword();
    expect(component.passwordOk).toBeFalse;
  });

  it('should call method true checkPassword', () => {

    let role1 = {
      role: 'exist',
      message: 'password exist'
    }
    spyOn(apiService, 'checkpassword').and.returnValue(of(role1));
    component.checkPassword();
    expect(component.passwordOk).toBeTrue;
  });
});
