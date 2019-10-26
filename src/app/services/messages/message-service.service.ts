import { Injectable } from '@angular/core';
import { Pagination } from '../pagination';
import { MessageItem } from './message-model';
import { HttpClient } from '@angular/common/http';
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
    const tmpUrl = 'assets/mocks/messages.json';

    return this.http.get<Pagination<MessageItem>>(tmpUrl);
  }

  getEmptyList(): Observable<Pagination<MessageItem>> {

    const tmpUrl = 'assets/mocks/empty.message.json';

    return this.http.get<Pagination<MessageItem>>(tmpUrl);
  }

}
