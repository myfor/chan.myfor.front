import { Component } from '@angular/core';
import { MessageServiceService } from './services/messages/message-service.service';
import { PageEvent } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Pagination } from './services/common';
import { NewMessage_Model } from './services/messages/message-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly DEFAULT_NAME = '匿名';

  havePagination = false;
  resultData = Pagination.getEmpty(); 
  isListLoad = false;
  ALLOW_WORDS_COUNT = 1024;
  remainWrodCount = this.ALLOW_WORDS_COUNT;
  isDisabled = true;
  showNoRecord = false;
  showClearRecord = false;
  //  刚发布的新信息
  newMessages: NewMessage[] = [];

  constructor(
    private messageService: MessageServiceService,
    private fb: FormBuilder
  ) {}

  newMessageForm = this.fb.group({
    nickName: [''],
    newMessage: ['', [Validators.required]]
  });

  clickTitle_NoRecord(): void {
    this.showNoRecord = !this.showNoRecord;
  }

  clickTitle_ClearRecord(): void {
    this.showClearRecord = !this.showClearRecord;    
  }

  //  提交
  submitNewMessage(): void {
    if (this.newMessageForm.invalid) {
      return;
    }
    this.isDisabled = true;
    let nickName = this.newMessageForm.get('nickName');
    if (!nickName.value) {
      nickName.setValue(this.DEFAULT_NAME);
    }

    //  提交给服务器
    let newMessage = this.newMessageForm.get('newMessage').value;

    this.newMessages.push(
      new NewMessage(nickName.value, newMessage)
    );

    let model = new NewMessage_Model(nickName.value, newMessage);
    this.messageService.addMessage(model)
      .subscribe();

    this.newMessageForm.reset();
    this.isDisabled = false;
  }

  input(value: string) {
    this.remainWrodCount = this.ALLOW_WORDS_COUNT - value.length;
    this.isDisabled = this.newMessageForm.invalid;
  }

  //  点击最新
  lastest(): void {
    this.isListLoad = true;
    
    this.messageService.getList(1, 20)
      .subscribe((data) => {
        this.resultData = data;
      });

    this.havePagination = true;
    this.isListLoad = false;
  }

  pageChange(event: PageEvent) {
    let index: number = event.pageIndex; 
    let size: number = event.pageSize;

    this.messageService.getList(index, size)
      .subscribe((data) => {
        this.resultData = data;
      });
  }

  
}

class NewMessage {
  constructor(
    public author: string,
    public content: string
  ) {
    
  }
}
