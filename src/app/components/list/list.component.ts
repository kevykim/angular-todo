import { Component} from '@angular/core';
import { ListInterface } from './list-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  showEdit : boolean = false;


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
  alphaMonth = this.todayDate.toLocaleDateString('default', {month: 'long'})
  todayDay = this.todayDate.getDate();

  currentDate = `${this.todayMonth}/${this.todayDay}/${this.todayYear}`


  myList : ListInterface[] = [
    {
    task : "Read",
    checked: false,
    date: this.currentDate
    },
    {
      task: "Study",
      checked: false,
      date: this.currentDate
    }
  ]

  addToList(task : string, date : string) {
    // let years = this.todayYear
    // console.log(years.toString()[0])

    if (!date && !task) {
      alert(`Cannot leave empty!`)
      return;
    }

    if (!date) {
      alert('Please add a date!')
      return;
    }

    if (!task) {
      alert(`Please add a task!`)
      return;
    }

    
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
    
    // Year Validation
    
    
    // Year
    if (Number(year) < Number(this.todayYear)) {
      alert(`Must be after ${this.todayYear}`)
      return;
    }  
    
    
    // Day Validation

    if (Number(year) > Number(this.todayYear)) {

    } else if (Number(month) > Number(this.todayMonth)) {

    } else if (Number(day) < Number(this.todayDay)) {
      alert(`Must be after today!`)
      return;
    }
    
    
    // Month Validation
    if (Number(year) > Number(this.todayYear)) {
    // this.myList = [{task,checked : false, date : formattedDate}, ...this.myList]
    } else if (Number(month) < Number(this.todayMonth)) {
      alert(`Must be after ${this.alphaMonth}`)
      return;
    }


    
    this.myList = [{task : task.charAt(0).toUpperCase() + task.slice(1) ,checked : false, date : formattedDate}, ...this.myList]
    // console.log(task)
    // console.log(day)
    // console.log(this.myList)
  }

  // editList(task : string, date : string) {
  //   if (!date && !task) {
  //     alert(`Cannot leave empty!`)
  //     return;
  //   }

  //   if (!date) {
  //     alert('Please add a date!')
  //     return;
  //   }

  //   if (!task) {
  //     alert(`Please add a task!`)
  //     return;
  //   }

    
  //   let month = ''
  //   if(date[5] === '1') {
  //     month = date[5] + date[6]
  //   } else {
  //     month = date[6]
  //   }
    
    
  //   let day = ''
  //   if(Number(date[8]) >= 1) {
  //     day = date[8] + date[9]
  //   } else {
  //     day = date[9]
  //   }
    
  //   const year = date[0] + date[1] + date[2] + date[3]

  //   const formattedDate = `${month}/${day}/${year}`
    
  //   // Year Validation
    
    
  //   // Year
  //   if (Number(year) < Number(this.todayYear)) {
  //     alert(`Must be after ${this.todayYear}`)
  //     return;
  //   }  
    
    
  //   // Day Validation

  //   if (Number(year) > Number(this.todayYear)) {

  //   } else if (Number(month) > Number(this.todayMonth)) {

  //   } else if (Number(day) < Number(this.todayDay)) {
  //     alert(`Must be after today!`)
  //     return;
  //   }

    
    
  //   // Month Validation
  //   if (Number(year) > Number(this.todayYear)) {
  //   // this.myList = [{task,checked : false, date : formattedDate}, ...this.myList]
  //   } else if (Number(month) < Number(this.todayMonth)) {
  //     alert(`Must be after ${this.alphaMonth}`)
  //     return;
  //   }
    
  //   task = task;
  //   date = date;
    
  // }

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
