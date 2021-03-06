import { Injectable } from '@angular/core';
import {Http, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { ICatalogRequest } from '../models/catalog.filter.interface';
import { BaseService } from '../base.service';
import { ICatalogData } from '../../models/catalog.data.interface';
import { IDataComboService } from './data.combo.service.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataComboService extends BaseService implements IDataComboService {

  constructor(private httpClient: HttpClient) {
    super('Catalog');
  }
  getCatalogData(catalogFilter: ICatalogRequest): Observable<ICatalogData[]> {
    const requestOpts: RequestOptionsArgs = {params: catalogFilter};
    return this.httpClient.post(this.getUrl(''), catalogFilter).catch(this.handleError);
  }

}
