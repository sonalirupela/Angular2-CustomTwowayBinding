import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent2 implements OnInit {

  private twowayBindingTrialVal="";

  @Output() twowayBindingTrialChange = new EventEmitter();

  @Input()
  get twowayBindingTrial() {
    return this.twowayBindingTrialVal;
  }

  set twowayBindingTrial(val) {
    this.twowayBindingTrialVal = val;
    this.twowayBindingTrialChange.emit(this.twowayBindingTrialVal);
  }


  
  constructor() {
    console.log("tesing component 2");
  }

  ngOnInit() {
  }

  onChange(event) {
    console.log("input value", event.target.value);
    this.twowayBindingTrial = event.target.value;
  }

}
/**
 * 
 * 
 * @export
 * @class TestComponent
 * @implements {OnInit}
 */
export class TestComponent implements OnInit {

  constructor() {
    console.log("tesing component");
  }

  ngOnInit() {
  }


}
