import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ALLOW_WORDS_COUNT = 1024;
  remainWrodCount = this.ALLOW_WORDS_COUNT;
  isDisabled = false;
  
  //  提交
  submitNewMessage(): void {
    this.isDisabled = true;

    //  提交给服务器, 成功后计时提交的间隔


    //  提交间隔
    const SUBMIT_INTERVAL = 3000;
     
    let timer = setInterval(() => {
      this.isDisabled = false;
      clearInterval(timer);
    }, SUBMIT_INTERVAL)
  }

  input(value: string) {
    this.remainWrodCount = this.ALLOW_WORDS_COUNT - value.length;
  }
}
