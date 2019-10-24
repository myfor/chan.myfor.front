import { Injectable } from '@angular/core';
import { Pagination } from '../pagination';
import { MessageItem } from './message-model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  //  获取留言列表
  getList(index: number, size: number): Pagination<MessageItem> {
    const data = new Pagination<MessageItem>(
      index, size, 100, 5,
      [
        new MessageItem('匿名', '吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽'),
        new MessageItem('匿名', '吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽'),
        new MessageItem('谁谁', '吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽吐槽')
      ]
    );

    return data;
  }

  getEmptyList(): Pagination<MessageItem> {
    const data = new Pagination<MessageItem>(
      0, 0, 0, 0, []
    );
    return data;
  }

}
