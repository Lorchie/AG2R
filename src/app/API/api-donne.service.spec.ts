import { TestBed, async, inject } from '@angular/core/testing';
import { environment } from '../../environments/environment';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiDonneService } from './api-donne.service';

describe('ApiDonneService', () => {
  let service: ApiDonneService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ApiDonneService
      ],
    });
    service = TestBed.inject(ApiDonneService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch get plan batch as an Observable`, async(inject([HttpTestingController, ApiDonneService],
    (httpClient: HttpTestingController, postService: ApiDonneService) => {

      const postItem = [
        {
          ID_BATCH: 0,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          CODE_APPLICATION: 'A0004',
          LIB_APPLICATION: 'LOGICS',
          ENDED_OK: 0,
          WAIT: 5,
          EXECUTING: 10,
          ENDED_NOT_OK: 10,
          TOTAL: 25,
          DATE_CHARGEMENT: '2021-03-26 11:34:02'
        },
        {
          ID_BATCH: 1,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          CODE_APPLICATION: 'A0004',
          LIB_APPLICATION: 'LOGICS',
          ENDED_OK: 10,
          WAIT: 23,
          EXECUTING: 7,
          ENDED_NOT_OK: 10,
          TOTAL: 50,
          DATE_CHARGEMENT: '2021-03-26 11:34:30'
        }
      ];


      postService.getDonneeBatchPlans('PS')
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });

      const req = httpMock.expectOne(environment.url + 'batchPlans?businessId=PS');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

  })));

  it(`should fetch get states suspended as an Observable`, async(inject([HttpTestingController, ApiDonneService],
    (httpClient: HttpTestingController, postService: ApiDonneService) => {

      const postItem = [
        {
          ID_SCENARIO: 0,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          LIB_SCENARIO: 'Rh_ean',
          APP_ASS_SCENARIO: 'MON CAMPUS',
          REF_SCENARIO: 'INC1017011',
          DATE_CHARGEMENT: '2021-04-14 17:04:54'
        },
        {
          ID_SCENARIO: 1,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          LIB_SCENARIO: 'Rh_neocase_service',
          APP_ASS_SCENARIO: 'NEOCASE',
          REF_SCENARIO: 'INC1017012',
          DATE_CHARGEMENT: '2021-04-14 17:04:54'
        }
      ];


      postService.getDonneeStatesScenarios('PS')
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });

      const req = httpMock.expectOne(environment.url + 'statesScenarios?businessId=PS');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

  })));

  it(`should fetch get suspended scenario as an Observable`, async(inject([HttpTestingController, ApiDonneService],
    (httpClient: HttpTestingController, postService: ApiDonneService) => {

      const postItem = [
        {
          ID_SCENARIO_SUSPENDU: 0,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          NBR_SCENARIO: 10,
          DATE_CHARGEMENT: '2021-04-14 17:04:54',
        },
        {
          ID_SCENARIO_SUSPENDU: 1,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          NBR_SCENARIO: 20,
          DATE_CHARGEMENT: '2021-04-14 18:04:54',
        }
      ];


      postService.getDonneeSuspendedScenarios('PS')
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });

      const req = httpMock.expectOne(environment.url + 'suspendedScenarios?businessId=PS');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

  })));

  it(`should fetch get incident as an Observable`, async(inject([HttpTestingController, ApiDonneService],
    (httpClient: HttpTestingController, postService: ApiDonneService) => {

      const postItem = [
        {
          ID_INC: 0,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          NUM_INC: 'INC1033339',
          LIB_INC: 'wpcci491 PUE0H-IMPCASSI-020 RC2 A1088',
          PRIORITE_INC: 'P4',
          ELT_CONF_INC: 'WPCCI491 -  - PUE0H-IMPCASSI-020',
          DATE_CHARGEMENT: '2021-04-14 17:04:54',
        },
        {
          ID_INC: 1,
          CODE_METIER: 'PS',
          LIB_METIER: 'Prévoyance Santé',
          NUM_INC: 'INC1033439',
          LIB_INC: 'wpcci491 PUE0H-IMPCASSI-024 RC2 A1088',
          PRIORITE_INC: 'P4',
          ELT_CONF_INC: 'WPCCI491 -  - PUE0H-IMPCASSI-024',
          DATE_CHARGEMENT: '2021-04-14 17:14:54',
        }
      ];


      postService.getDonneeIncidents('PS')
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });

      const req = httpMock.expectOne(environment.url + 'incidents?businessId=PS');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

  })));
});
