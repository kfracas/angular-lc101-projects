import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   jokeHeading: string = "Joke Buttons"
   inactiveFrustration: boolean = false;

   constructor() { }

   ngOnInit() { }

   activate(){
      this.inactiveGold = false;
      this.inactiveSilver = false;
      this.inactiveCopper = false;
   }

}
