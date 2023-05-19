import { Component } from '@angular/core';
import { ListInterface } from '../list/list-interface';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  show : boolean = false;
  onClick : boolean = true;


  clicked() {
    this.onClick = false;
  }

  notclicked() {
    this.onClick = true;
  }

}
