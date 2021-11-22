import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  blnShowImage = false;
  blnShowText = false;
  iTimesPressed = 0;
  strMsg = "";

  constructor() { }

  ngOnInit(): void {
    console.log("You found your way here! Are you looking for a job? Apply here: RandomURL(dot)org/applyourself")
  }

  btnClick(){
    this.iTimesPressed++;
    this.blnShowText = true;
    this.strMsg = "You have pressed it "+this.iTimesPressed+" times. Do not press it again! I will be very angry!";
    if(this.iTimesPressed >= 5){
      this.strMsg = "Rawr!";
      this.blnShowImage = true;
    }
  }
}
