import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TxrService {

  message = '';
  
  constructor(private http: Http) {}

  txr(txrRequest) {
    return this.http.post('http://localhost:8080/api/txr', txrRequest)
      .map(resp => resp.json())
  }

}
