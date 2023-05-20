import { Component, Input } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  show : boolean = false;
  onClick : boolean = true;

  instanceList = new ListComponent();

  clicked() {
    this.onClick = false;
  }

  notclicked() {
    this.onClick = true;
  }

  addItem(task : string) {
    this.instanceList.addToList(task);
  }

}
