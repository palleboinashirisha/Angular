import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    slogan: string = `your one step shop for everything.`
    
    getslogan(){
      return "This is new slogan for this web application.."
    }
    source : string = "/assets/shopping.jpeg"

}
