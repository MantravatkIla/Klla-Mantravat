import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeproject',
  templateUrl: './changeproject.component.html',
  styleUrls: ['./changeproject.component.css']
})
export class ChangeprojectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft") {
      x.className = "sidebarleftB";
    } else {
      x.className = "col-sm-2 sidebarleft";
    }
  }

  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    console.log(x)
    if (x.className === "col-sm-3  right-sidebar") {
      x.className = "right-sidebarB";
    } else {
      x.className = "col-sm-3  right-sidebar";
    }
  }
}
