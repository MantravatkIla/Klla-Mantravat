import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  leaveStatus: boolean;
  headerOpts1: string[];
  tname: { "StartDate": string; "EndDate": string; "projectname": string; "Status": string; }[];
  subtask: { "StartDate": string; "EndDate": string; "projectname": string; "Status": string; }[];
  companyLeaveCelender: { key: string; value: string; }[];

  constructor() { }

  ngOnInit() {
    this.leaveStatus = true;
    this.companyCalender();
  }
  companyCalender() {
    this.headerOpts1 = ["Project", "project2", "project3", "Project4"];
    this.tname = [

      {
        "StartDate": "2-10-2019",
        "EndDate": "6-10-2019",
        "projectname": "case study",
        "Status": "progress"
      },
    ]
  }
  
  
  

task1(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }


}}




