import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // serverid:number=10;
  // serverstatus:string="offline";
  // serverstatusmethod:string="OFFLINEmethod";
  // getserverstatus(){
  //   return this.serverstatusmethod;
  // };
  // allowNewServer:boolean = false;

  // viewProducts = "Love you Sunil";
   
  // name="Please enter name here"
  // constructor() { 
  // setTimeout(() => {
  //   this.allowNewServer=true;
  // }, 2000);
  // };

  // twoway="";
  // buttonClick=true;

  

  // onViewProducts(){
  //   this.viewProducts = ["Shampoo", "flour", "Ice Cream"];
  // }
  ngOnInit() {
  };
  onButtonClick(){
    this.buttonClick=true;
  }
buttonClick=false;

}
