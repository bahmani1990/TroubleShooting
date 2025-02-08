import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  constructor(
    public notifiService:NotificationService
  ){}

  @Output() MODE_MAIN=new EventEmitter<string>()

  public MODE:'MAIN'|'TAGS'='MAIN'
  public SAVE_QUESTION:boolean=false
  public item=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]
  public pageNames:string[]=[]
  
  ngOnInit(): void {
    // this.pageNames=['برچسب','سوال جدید']
  }
  ChangeMode(){
    this.MODE_MAIN.emit('QUESTIONS')
    this.notifiService.ToggleSubject()
    this.notifiService.BreadCrampPage(['برچسب','سوال جدید'])
   }
}
