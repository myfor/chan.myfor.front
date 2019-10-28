import { Injectable } from '@angular/core';
import { Pagination, Result } from '../common';
import { MessageItem, NewMessage_Model } from './message-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(
    private http: HttpClient
  ) { }

  //  获取留言列表
  getList(index: number, size: number): Observable<Pagination<MessageItem>> {
    // const tmpUrl = 'assets/mocks/messages.json';
    const url = 'http://192.168.1.192:9000/messages';

    const options = {
      params: new HttpParams()
        .set('index', index.toString())
        .set('size', size.toString())
    };

    return this.http.get<Pagination<MessageItem>>(url, options);
  }

  addMessage(model: NewMessage_Model): Observable<Result> {
    const url = 'http://192.168.1.192:9000/messages';

    if (model.invalid) {
      throw "新留言参数无效";
    }

    // const optionss = {
    //   params: new HttpParams()
    //     .set('author', model.author)
    //     .set('content', model.content)
    // };

    return this.http.post<Result>(url, model);
  }
}
