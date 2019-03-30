import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']
})
export class CreateteamComponent implements OnInit {
  resoures: any[] = [];
  team:any[]=[];
  feed: string[];
  
  constructor() { }

  ngOnInit() {
    this.feed=["Every project has deadline","Please fill Timesheet Regulary","You can see the Timesheet By Display timshhet","This is Feed Screen","You cant Enter any thing"]
  }
  res()
  {
    var rn=(document.getElementById("rname")as HTMLElement).value;
    var rd=(document.getElementById("rdes")as HTMLElement).value;
    var sd=(document.getElementById("rsd")as HTMLElement).value;
    var ed=(document.getElementById("red")as HTMLElement).value;
    console.log(rn);
    
    this.resoures.push(
      {
        'name':rn,
        'rd':rd,
        'sd':sd,
        'ed':ed
    }
    )
   console.log(this.resoures); 
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
  Team()
  {
    var rn=(document.getElementById("tname")as HTMLElement).value;
    var rd=(document.getElementById("tdes")as HTMLElement).value;
    var sd=(document.getElementById("tsd")as HTMLElement).value;
    var ed=(document.getElementById("ted")as HTMLElement).value;
    console.log(rn);
    
    this.team.push(
      {
        'name':rn,
        'rd':rd,
        'sd':sd,
        'ed':ed
    }
    )
   console.log(this.team); 
  }

}
