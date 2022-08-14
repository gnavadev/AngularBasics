import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styles: [`
  .greaterthan5 {
      color: white;
  }
`]

})
export class DisplayButtonComponent implements OnInit {
  displaySettings = true;
  output = [];
  value = new Date();

  constructor() { }

  ngOnInit(): void {
  }


  onDisplaySettings()
  {
    this.displaySettings =  !this.displaySettings;
    this.output.push(this.value);
    console.log(this.output); 
  }


}
