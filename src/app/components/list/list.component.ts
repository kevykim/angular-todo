import { Component } from '@angular/core';
import { ListInterface } from './list-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myList : ListInterface[] = [
    {
    task : "read",
    checked: false,
    date: new Date('2023-05-17')
    },
    {
      task: "study",
      checked: true,
      date: new Date('2023-05-17')
    }
  ]

  addToList(task : string) {
    this.myList.push({
      task,
      checked : false,
      date : new Date()
    })
    console.log(task)
    console.log(this.myList)
  }

}
