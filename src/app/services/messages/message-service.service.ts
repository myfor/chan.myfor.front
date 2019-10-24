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
    return null;
  }
}
