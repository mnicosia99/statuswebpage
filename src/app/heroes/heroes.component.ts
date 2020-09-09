import { Component, OnInit } from '@angular/core';
import { Status } from '../status';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  statusColors = ['gray', 'yellow', 'red', 'green'];

  public items: Array<Status>;

  statusCost: Status = {
    id: 1,
    type: 'Cost',
    color : "gray"
  };

  statusSchedule: Status = {
    id: 2,
    type: 'Schedule',
    color : "gray"
  };

  //0xD3D3D3

  constructor() {
    this.items = [this.statusCost, this.statusSchedule]
  }

  ngOnInit(): void {
  }

  public changeColor(event: any, status: Status) {
    let found = false;
    let updated = false;

    for (let color of this.statusColors) {
      if (status.color.localeCompare(color) == 0) {
        found = true;
        console.log(color);
        console.log(found);
      } else if (found) {
        status.color = color;
        console.log(status.color);
        console.log(found);
        updated = true;
        break;
      }
    }

    if (!found || !updated) {
      status.color = this.statusColors[0];
      console.log(status.color);
      console.log(found);
    }
  }
}
