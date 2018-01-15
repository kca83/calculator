import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  output: string;

  equation: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  takeInput(input: string) {
    if(input != '=') {
      this.output = input;
      this.equation.push(input);
    }
    else {
      this.compute();
    }

    // if(this.equation.length === 3) {
    //   this.compute();
    // }

  }

  compute() {
    if(this.equation[1] === '+') {
      this.output = (parseInt(this.equation[0]) + parseInt(this.equation[2])).toString();
    }
  }

}
