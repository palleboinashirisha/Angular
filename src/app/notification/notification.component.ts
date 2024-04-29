import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notification" [ngClass]="{fadeOut : displayNotification}">
                <p>This website uses cookies to provide better user experiance.</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: [".notification{background-color:lightblue;margin:5px 0px; padding: 5px 0px;}",
  ".notification p{font-size:18px;text-align:center;color:grayblack;}",
  ".close{float:right; margin-top:-15px}",".btn{margin:-30px 20px 10px 5px}",
  ".fadeOut{visibility:hidden; opacity:true; transition: visibility 0s 2s,opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification : boolean = false;

  closeNotification(){
    this.displayNotification=true
  }
}
