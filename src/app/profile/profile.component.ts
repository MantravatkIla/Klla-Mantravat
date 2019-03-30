import { Component, OnInit } from '@angular/core';
import $ = require('jquery');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
      });
    });   
  }
img()
{
  var a=(document.getElementById("profile-image-upload")as HTMLElement).value
  console.log(a.substr(12,25));
  console.log(a);
 (<HTMLInputElement>document.getElementById("profile-image1")as HTMLElement).src = '/assets/images/'+a.substr(12,25);
  
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
