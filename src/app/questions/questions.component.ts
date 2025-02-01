import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild, viewChild } from '@angular/core';
import { UploadFileComponent } from "../upload-file/upload-file.component";
import { NotificationService } from '../services/notification.service';
import { NotifiAlert } from '../interfaces/interfaces';
import { SimpleComponent } from "../simple/simple.component";
import { RouterOutlet } from '@angular/router';
import { BreadCrampComponent } from "../bread-cramp/bread-cramp.component";
import { DownloadFileComponent } from "../download-file/download-file.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, UploadFileComponent, SimpleComponent, RouterOutlet, BreadCrampComponent, DownloadFileComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnDestroy{
constructor(
  public alert:NotificationService
){
  this.subs=this.alert.GetSubject().subscribe(()=>{
    this.ModeQuestion.emit('newQuestion');
    this.MODE='NEW_QUESTION'
    })
}

@ViewChild('select') select!:ElementRef
@Output() ModeQuestion=new EventEmitter<string>()
@Output() MODE_MAIN=new EventEmitter<string>()

public MODE:'COMPONENT_QUESTION'|'NEW_QUESTION'|'SHOW_QUESTION'='COMPONENT_QUESTION'
public MODE_LIST:'NEW'|'MOST_VIEW'|'NO_ANSWER'|'OTHER'='NEW'
public SAVE_QUESTION:boolean=false
public breadCrampPage:string[]=[]
private subs:Subscription=new Subscription()

ShowNofication(){
  this.ModeQuestion.emit('NotNewQuestion');
  let model:NotifiAlert={message:'ثبت سوال',iconMessage:'fa-check-circle',colorMessage:'text-green-700',text:'.سوال شما با موفقیت ثبت شد',bgColor:'bg-green-100'}
  this.alert.ShowNotification(model)
}

OpenSelect(){
  this.select.nativeElement.click()
}

ShowQuestion(){
  this.ModeQuestion.emit('showquestion')
  this.MODE='SHOW_QUESTION'
  this.alert.BreadCrampPage(['سوالات','سوال'])
}

NewQuestion(){
  this.ModeQuestion.emit('newQuestion');
  this.alert.BreadCrampPage(['سوالات','سوال جدید'])
}

SelectedBreadCramp(event:string){
  if(event=='سوالات') {
    this.MODE='COMPONENT_QUESTION'
    this.ModeQuestion.emit('NotNewQuestion')
  }
  
  if(event=='پروفایل'){
    this.ModeQuestion.emit('NotNewQuestion')
    this.MODE_MAIN.emit('PROFILE')
    
  }
  if(event=='برچسب'){
    this.ModeQuestion.emit('NotNewQuestion')
    this.MODE_MAIN.emit('TAGS')
    
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
