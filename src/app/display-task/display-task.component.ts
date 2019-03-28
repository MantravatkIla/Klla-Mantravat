import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})

export class DisplayTaskComponent implements OnInit {
  display: { "StartDate": string; "EndDate": string; "name":string;"projectname": string; "status": string; }[];
  names: string[];
  a: string;

  constructor() { }

  ngOnInit() {

    this.a="task-1"
    this.names=["project1"
    ,'project2'
    ,'project3'
    ,'project4']
    // $('.expand').click(function() {
    //   $('ul', $(this).parent()).eq(0).toggle();
    // });
  
  this.display=[
    {
      "name":      "Anshul",
      "StartDate" : "12-01-2019",
      "EndDate"   : "14-01-2019",
      "projectname" : "hrms",
      "status" : "progress"
    },
  ]
  }
subtask(){
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    
    });
  }
}

}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

