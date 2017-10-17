import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 childData:string;
  message="Hello World";
  childMessage:"";

  receiveMessage($event){
  this.childMessage=$event;
  }
}
