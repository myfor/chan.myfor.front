import { Component, OnInit } from '@angular/core';
import { MessageServiceService} from './services/messages/message-service.service';
import { PageEvent } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  havePagination = false;
  resultData;
  isListLoad = false;
  ALLOW_WORDS_COUNT = 1024;
  remainWrodCount = this.ALLOW_WORDS_COUNT;
  isDisabled = true;
  showNoRecord = false;
  showClearRecord = false;
  
  constructor(
    private messageService: MessageServiceService,
    private fb: FormBuilder
  ) {}

  newMessageForm = this.fb.group({
    newMessage: ['', [Validators.required]]
  });


  ngOnInit(): void {
    this.resultData = this.messageService.getEmptyList();
  }

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

    //  提交给服务器, 成功后计时提交的间隔


    // //  提交间隔
    // const SUBMIT_INTERVAL = 3000;

    // const timer = setInterval(() => {
    //   this.isDisabled = false;
    //   clearInterval(timer);
    // }, SUBMIT_INTERVAL)
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
    
    this.resultData = this.messageService.getList(1, 20);

    this.havePagination = true;
    this.isListLoad = false;
  }

  pageChange(event: PageEvent) {
    
  }
}
