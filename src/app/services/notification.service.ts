import { Injectable } from '@angular/core';
import { NotifiAlert } from '../interfaces/interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  public notification:NotifiAlert| null =null
  public namesPage:string[] =[]
  private subject=new Subject<void>()




  ShowNotification(param:NotifiAlert){
    debugger
    this.notification=param

    setTimeout(()=>{
      this.ClearNotification()
    },2000)
  }

  ClearNotification(){
    this.notification=null
  }

 ToggleSubject(){
    this.subject.next()
  }

  GetSubject(){
    return this.subject
  }


  BreadCrampPage(value:string[]){
   this.namesPage=value
  }

}
