import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;


  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    this.takeOffEnabled = false;
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 handleLand(rocketImage) {
  let result = window.confirm('Are you sure the shuttle is ready to land?');
  rocketImage.style.bottom = '0px';
  this.takeOffEnabled = true;
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle has landed.';
  }
}

handleAbortMission(rocketImage) {
  let result = window.confirm('Are you sure you would like to abort the mission?');
  rocketImage.style.bottom = '0px';
  this.takeOffEnabled = true;
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission aborted.';
  }
}

moveRocket(rocketImage, direction) {
  this.warning(this.width, this.height);
  if (direction === 'right') {
  let movement = parseInt(rocketImage.style.left) + 10 + 'px';
  rocketImage.style.left = movement;
  this.width = this.width + 10000;
  } else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
  } else if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
  } else if (direction === 'down') {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
  }
}

warning(width, height) {
  if (width > 260000 || width < 0 || height < 0 || height > 340000) {
    this.color = 'orange';
  } else {
    this.color = 'blue';
  }
}

}
