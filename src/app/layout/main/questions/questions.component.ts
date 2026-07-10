
import { Component, ElementRef, EventEmitter, inject, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { UploadFileComponent } from "../../../shared/components/upload-file/upload-file.component";
import { UtilityService } from '../../../core/services/utility.service';
import { NotifiAlert } from '../../../shared/interfaces/interfaces';
import { RouterOutlet } from '@angular/router';
import { BreadCrampComponent } from "../../../shared/components/bread-cramp/bread-cramp.component";
import { DownloadFileComponent } from "../../../shared/components/download-file/download-file.component";
import { Subscription } from 'rxjs';
import { SimpleComponent } from '../../../shared/components/simple/simple.component';

@Component({
    selector: 'app-questions',
    imports: [UploadFileComponent, SimpleComponent, RouterOutlet, BreadCrampComponent, DownloadFileComponent],
    templateUrl: './questions.component.html',
    styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit, OnDestroy{

private utilityService:UtilityService=inject(UtilityService);


@ViewChild('select') select!:ElementRef
@Output() ModeQuestion=new EventEmitter<string>()
@Output() MODE_MAIN=new EventEmitter<string>()

public MODE:'COMPONENT_QUESTION'|'NEW_QUESTION'|'SHOW_QUESTION'='COMPONENT_QUESTION'
public MODE_LIST:'NEW'|'MOST_VIEW'|'NO_ANSWER'|'OTHER'='NEW'
public SAVE_QUESTION:boolean=false
public breadCrampPage:string[]=[]
private subs:Subscription=new Subscription()


ngOnInit(): void {
   this.subs=this.utilityService.GetSubject().subscribe(()=>{
    this.ModeQuestion.emit('newQuestion');
    this.MODE='NEW_QUESTION'
    })
}

ShowNofication(){
  this.ModeQuestion.emit('NotNewQuestion');
  let model:NotifiAlert={message:'ثبت سوال',iconMessage:'fa-check-circle',colorMessage:'text-green-700',text:'.سوال شما با موفقیت ثبت شد',bgColor:'bg-green-100'}
  this.utilityService.ShowNotification(model)
}

OpenSelect(){
  this.select.nativeElement.click()
}

ShowQuestion(){
  this.ModeQuestion.emit('showquestion')
  this.MODE='SHOW_QUESTION'
  this.utilityService.BreadCrampPage(['سوالات','سوال'])
}

NewQuestion(){
  this.ModeQuestion.emit('newQuestion');
  this.utilityService.BreadCrampPage(['سوالات','سوال جدید'])
}

SelectedBreadCramp(event:string){
  if(event=='سوالات') {
    this.ModeQuestion.emit('NotNewQuestion')
    this.MODE='COMPONENT_QUESTION'
    this.MODE_MAIN.emit('QUESTIONS')
  }
  
  if(event=='ذخیره ها' || event=='سوالات من' || event=='تنظیمات' ){
    this.ModeQuestion.emit('NotNewQuestion')
    this.MODE_MAIN.emit('PROFILE')
    this.MODE='COMPONENT_QUESTION'
    
  }
  if(event=='برچسب'){
    this.ModeQuestion.emit('NotNewQuestion')
    this.MODE_MAIN.emit('TAGS')
    this.MODE='COMPONENT_QUESTION'
    
  }

}


ChangeText(){
  if(this.MODE_LIST=='NEW') return '100 سوال جدید'
  if(this.MODE_LIST=='MOST_VIEW') return '100 سوال پربازدید'
  if(this.MODE_LIST=='NO_ANSWER') return '100 سوال بدون پاسخ'
  if(this.MODE_LIST=='OTHER') return 'سایر'
  else return '100 سوال جدید'
}

AskingQuestion(){
  this.ModeQuestion.emit('newQuestion')
}

ngOnDestroy(): void {
  this.subs.unsubscribe()
}
}
