import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias () {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://gist.githubusercontent.com/rlpereira/02af9e714e3bd8e726a837d8af3459f8/raw/b22e22c7884d8aba2e201eec7816ff3c5f8d2f29/news.json');
  }
}
