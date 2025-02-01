import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { BreadCrampComponent } from "../bread-cramp/bread-cramp.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
constructor(
  public notifiService:NotificationService

){}

@Input() MODE_PROFILE:'MY_QUESTIONS'|'SAVES'|'SITTING'='MY_QUESTIONS';
@Output() MODE_MAIN=new EventEmitter<string>()

public pageNames:string[]=[]
public SAVE_QUESTION:boolean=false



ngOnInit(): void {
  this.pageNames=['پروفایل','سوال جدید']
}

ChangeMode(){
  this.MODE_MAIN.emit('QUESTIONS')
 this.notifiService.ToggleSubject()
  this.notifiService.BreadCrampPage(['پروفایل','سوال جدید'])
}

// BackToComponent(event:any){
//   this.ModeQuestion.emit('PROFILE')
// }
}
