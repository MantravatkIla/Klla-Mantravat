import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayteam',
  templateUrl: './displayteam.component.html',
  styleUrls: ['./displayteam.component.css']
})
export class DisplayteamComponent implements OnInit {
  resoures: any[] = [];
  team: any[] = [];

  results: any[] = [];

  constructor() { }

  ngOnInit() {
    this.resoures = [
      {
        'name': 'SAP  UI5',
        'rd': "angular",
        'sd': "2018-09-02",
        'ed': "2019-04-02",
        'res': [{
          'rname': 'Aditya',
          'rid': '123',
          'rsd': '02-09-2018',
          'red': '4-02-2019'
        }]
      },
      {
        'name': ' SAP ABAP',
        'rd': "angular",
        'sd': "2018-09-02",
        'ed': "2019-04-02",
        'res': [{
          'rname': 'Anshul',
          'rid': '122',
          'rsd': '02-09-2018',
          'red': '4-02-2019'
        }]
      },
      {
        'name': 'Angular',
        'rd': "angular",
        'sd': "2018-09-02",
        'ed': "2019-04-02",
        'res': [{
          'rname': 'Ravi',
          'rid': '1234',
          'rsd': '02-09-2018',
          'red': '4-02-2019'
        }]
      }
    ]

    console.log(this.resoures.length);


    // $("#tname").on("keyup", function () {
    //   var searchFor = $("#tname").val().toLowerCase();
    //   var results = [];
    //   for (var i = 0; i < 1; i++) {
    //     if (this.resoures[i].name.toLowerCase().indexOf(searchFor) > -1) {
    //       results.push("<a href='" + this.resoures[i].rd + "' target='_blank'>" + this.resoures[i].name + "</a>")
    //       console.log("true");
    //     }
    //     else {
    //       console.log("false");

    //     }

    //   }

    // if (results.length == 0)
    //   $("#search-results").html("No Results Found");
    // else
    //   $("#search-results").html(results.join("<br>"));
    // });
  }
  res() {
    var rn = (document.getElementById("tname") as HTMLElement).value;
    var rd = (document.getElementById("tdes") as HTMLElement).value;
    var sd = (document.getElementById("tsd") as HTMLElement).value;
    var ed = (document.getElementById("ted") as HTMLElement).value;
    var flag = 0;
    var rn1 = rn.toLowerCase();
    var rd1 = rd.toLowerCase();
    console.log(rn1);

    console.log(this.resoures[0].name.toLowerCase().indexOf(rn));


    // console.log($("#tname").val().toLowerCase());
    // $("#tname").on("keyup", function () {
    //   var searchFor = $("#tname").val().toLowerCase();
    //   var results = [];
    //   for (var i = 0; i < this.resoures.length; i++) {
    //     if (this.resoures[i].name.toLowerCase().indexOf(searchFor) > -1)
    //       results.push("<a href='" + this.resoures[i].rd + "' target='_blank'>" + this.resoures[i].name + "</a>")
    //   }
    //   if (results.length == 0)
    //     $("#search-results").html("No Results Found");
    //   else ||this.resoures[i].rd.toLowerCase().indexOf(rd) > -1 ||this.resoures[i].sd.indexOf(sd) > -1||this.resoures[i].ed.indexOf(ed) > 0
    //     $("#search-results").html(results.join("<br>")); ||this.resoures[i].rd.toLowerCase().indexOf(rd1) > -1 ||this.resoures[i].sd.indexOf(sd) > -1||this.resoures[i].ed.indexOf(ed) > -1 
    // });

    for (var i = 0; i < this.resoures.length; i++) {


      if (this.resoures[i].name.toLowerCase().indexOf(rn1) > -1) {
        this.results.push({
          'name': this.resoures[i].name,
          'rd': this.resoures[i].rd,
          'sd': this.resoures[i].sd,
          'ed': this.resoures[i].ed,
          'res': this.resoures[i].res
        })

      }


    }
    if (true) {

      console.log(this.results);


    }
  }
  Team() {
    var rn = (document.getElementById("tname") as HTMLElement).value;
    var rd = (document.getElementById("tdes") as HTMLElement).value;
    var sd = (document.getElementById("tsd") as HTMLElement).value;
    var ed = (document.getElementById("ted") as HTMLElement).value;
    console.log(rn);
    var id=(document.getElementById("chb-0") as HTMLElement)
   var id1=(document.getElementById("chb-1") as HTMLElement)
   var id2=(document.getElementById("chb-2") as HTMLElement)
    if(id.checked==true)
    {
      
      // console.log(this.results[i].res[0].rname)
      this.team.push(
        {
          'name':this.results[0].res[0].rname,
          'rd': this.results[0].res[0].rid,
          'sd': this.results[0].res[0].rsd,
          'ed': this.results[0].res[0].red
        }
      )
      }
      else if(id1.checked==true)
    {
      
      // console.log(this.results[i].res[0].rname)
      this.team.push(
        {
          'name':this.results[1].res[0].rname,
          'rd': this.results[1].res[0].rid,
          'sd': this.results[1].res[0].rsd,
          'ed': this.results[1].res[0].red
        }
      )
      }
      // else if(id2.checked==true)
      // {
        
      //   // console.log(this.results[i].res[0].rname)
      //   this.team.push(
      //     {
      //       'name':this.results[2].res[0].rname,
      //       'rd': this.results[2].res[0].rid,
      //       'sd': this.results[2].res[0].rsd,
      //       'ed': this.results[2].res[0].red
      //     }
      //   )
      //   }
      else
      {
        this.team.pop()
      }
    console.log(this.team);
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft") {
      x.className = "sidebarleftB";
      x.style.marginTop='28px'
    } else {
      x.className = "col-sm-2 sidebarleft";
    }
  }

  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    if (x.className === "col-sm-3 right-sidebar") {
      console.log("if");
      x.className = "right-sidebarB";
      x.style.marginTop='-266%'
      x.style.marginLeft="421px"
    } else {
      console.log("else");
      x.className = "col-sm-3 right-sidebar";
    }
  }
}
