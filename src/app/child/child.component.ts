import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
   inputs: ['parentData'],
  outputs: ['childEvent']
})
export class ChildComponent implements OnInit {

  @Input() message: string;
  @Output() childMessageEvent = new EventEmitter<string>();
  childMessage: string = "Hello from Child";
  public parentData: string;
  childEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChange(value: string) {
    this.childEvent.emit(value);
  }
  sendMessage() {
    this.childMessageEvent.emit(this.childMessage);
  }

}
