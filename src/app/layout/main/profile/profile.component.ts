
import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';


@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{

private utilityService:UtilityService=inject(UtilityService);
  

@Input() MODE_PROFILE:'MY_QUESTIONS'|'SAVES'|'SITTING'='MY_QUESTIONS';
@Output() MODE_MAIN=new EventEmitter<string>()

public pageNames:string[]=[]
public SAVE_QUESTION:boolean=false



ngOnInit(): void {
  // this.pageNames=['پروفایل','سوال جدید']
}

ChangeMode(text?:string){
  debugger
 this.MODE_MAIN.emit('QUESTIONS')
 this.utilityService.ToggleSubject()
 this.utilityService.BreadCrampPage([`${text}`,'سوال جدید'])
}

// BackToComponent(event:any){
//   this.ModeQuestion.emit('PROFILE')
// }
}
