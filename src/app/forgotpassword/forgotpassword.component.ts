import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft divHight2") {
      console.log("if");
      x.className = "sidebarleftB";
      x.style.marginTop='23px'
    } else {
      console.log("else");
      x.className = "col-sm-2 sidebarleft divHight2";
    }
  }
  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    if (x.className === "col-sm-3 right-sidebar") {
      console.log("if");
      x.className = "right-sidebarB";
      x.style.marginTop='-208%'
      x.style.marginLeft="447px"
    } else {
      console.log("else");
      x.className = "col-sm-3 right-sidebar";
    }
  }
}
