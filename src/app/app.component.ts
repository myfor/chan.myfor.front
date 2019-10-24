import { Component, OnInit } from '@angular/core';
import { MessageServiceService} from './services/messages/message-service.service';
import { Pagination } from './services/pagination';
import { MessageItem } from './services/messages/message-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  resultData: Pagination<MessageItem>;
  watchText = '随 便 看 看';
  isListLoad = false;
  ALLOW_WORDS_COUNT = 1024;
  remainWrodCount = this.ALLOW_WORDS_COUNT;
  isDisabled = false;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit(): void {
    this.resultData = this.messageService.getEmptyList();
  }

  //  提交
  submitNewMessage(): void {
    this.isDisabled = true;

    //  提交给服务器, 成功后计时提交的间隔


    //  提交间隔
    const SUBMIT_INTERVAL = 3000;

    const timer = setInterval(() => {
      this.isDisabled = false;
      clearInterval(timer);
    }, SUBMIT_INTERVAL)
  }

  input(value: string) {
    this.remainWrodCount = this.ALLOW_WORDS_COUNT - value.length;
  }

  //  点击随便看看
  watch(): void {
    this.isListLoad = true;

    this.resultData = this.messageService.getList(1, 20);

    this.watchText = '再 随 便 看 看';
    this.isListLoad = false;
  }
}
