import { Component} from '@angular/core';
import { ListInterface } from './list-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  show : boolean = false;
  onClick : boolean = true;


  clicked() {
    this.onClick = false;
  }

  notclicked() {
    this.onClick = true;
  }

  // Current Date
  todayDate = new Date();
  todayYear = this.todayDate.getFullYear();
  todayMonth = this.todayDate.getMonth() + 1;
  todayDay = this.todayDate.getDate();

  currentDate = `${this.todayMonth}/${this.todayDay}/${this.todayYear}`


  myList : ListInterface[] = [
    {
    task : "read",
    checked: false,
    date: this.currentDate
    },
    {
      task: "study",
      checked: false,
      date: this.currentDate
    }
  ]

  addToList(task : string, date : string) {
    // if (!date) {
    //   alert('Enter a valid date')
    // }

    let month = ''
    if(date[5] === '1') {
      month = date[5] + date[6]
    } else {
      month = date[6]
    }

    let day = ''
    if(Number(date[8]) >= 1) {
      day = date[8] + date[9]
    } else {
      day = date[9]
    }

    const year = date[0] + date[1] + date[2] + date[3]

    const formattedDate = `${month}/${day}/${year}`

    this.myList = [{task,checked : false, date : formattedDate}, ...this.myList]
    // console.log(task)
    // console.log(day)
    // console.log(this.myList)
  }

  undoCheck() : void {
    for (const key in this.myList) {
      let value = this.myList[key]
      value.checked = false
      // console.log(this.myList)
    }
  }


  undoCheckAppear() : boolean {
    let counter = 0;
    for (const key in this.myList) {
      let val = this.myList[key]
      if (val.checked === true) {
        counter++;
      }

      if (counter >= 1) {
        return true
      }
      
    }
    
    return false

  }

}
