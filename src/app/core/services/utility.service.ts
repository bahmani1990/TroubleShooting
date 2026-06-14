import { Injectable } from '@angular/core';
import { NotifiAlert } from '../../shared/interfaces/interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {}

  public notification:NotifiAlert| null =null
  public namesPage:string[] =[]
  private subject=new Subject<void>()




  ShowNotification(param:NotifiAlert){
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
