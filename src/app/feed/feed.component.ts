import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    if (x.className === "col-sm-3 right-sidebar") {
      console.log("if");
      x.className = "right-sidebarB";
    } else {
      console.log("else");
      x.className = "col-sm-3 right-sidebar";
    }
  }
}
