import { TestBed, async, inject } from '@angular/core/testing';
import { environment } from '../../environments/environment';

import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ApiCallService
      ],
    });
    service = TestBed.inject(ApiCallService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch get message as an Observable`, async(inject([HttpTestingController, ApiCallService],
    (httpClient: HttpTestingController, postService: ApiCallService) => {

      const postItem = [
        {
          ID_MESSAGE: 0,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          LIB_MSG: 'Problème avec le back',
          TYPE_MSG: 'Faits Marquants',
          DATE_CREATION: '2021-04-14 17:05:49',
        },
        {
          ID_MESSAGE: 1,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          LIB_MSG: 'Problème avec le Accueil',
          TYPE_MSG: 'Faits Marquants',
          DATE_CREATION: '2021-04-14 11:09:18',
        },
        {
          ID_MESSAGE: 2,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          LIB_MSG: 'Problème avec le Client',
          TYPE_MSG: 'Faits Marquants',
          DATE_CREATION: '2021-04-14 11:15:30',
        }
      ];


      postService.getMessages('PS')
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      const req = httpMock.expectOne(environment.url + 'messages?businessId=PS');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

  })));

  it('post Message returned Observable should match the right data', () => {
    const mockCourse = {
      message: 'MESSAGE IS CREATED SUCCESSFULLY WITH ID =  1009',
      status: 201
    };

    service.ajouterMessage({ codeMetier: 'PS', libMetier: 'Prévoyance Santé', typeMessage: 'Faits Marquants' }, 'test')
      .subscribe((courseData: any) => {
        expect(courseData.message).toEqual('MESSAGE IS CREATED SUCCESSFULLY WITH ID =  1009');
      });

    const req = httpMock.expectOne(environment.url + 'messages');

    expect(req.request.method).toEqual('POST');

    req.flush(mockCourse);
  });

  it('should delete the correct data', () => {
    service.deleteMessage('3').subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(
      environment.url + 'messages?param=3',
      'delete to api'
    );
    expect(req.request.method).toBe('DELETE');

    req.flush(3);

    httpMock.verify();
  });

});
