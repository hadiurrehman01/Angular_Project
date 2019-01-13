import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a = 1
  b = 2
  date = new Date();
  dataObjects = 
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
      ];
      name = function() {
        return false;
      };
      myClickFunction(event) {
     };
     sum(){
        return this.a+ this.b
     }
     constructor() {
      setInterval(() => {
        this.date = new Date();
        this.b = this.b+1
      }, 1);
      setInterval(() => {
        this.b = this.b+1
      }, 10000000);
  }
}
