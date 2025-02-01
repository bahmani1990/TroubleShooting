import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-bread-cramp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bread-cramp.component.html',
  styleUrl: './bread-cramp.component.css'
})
export class BreadCrampComponent implements OnInit{

  constructor(
    public notService:NotificationService,
  ){
  }
  
  @Output() EventPageName=new EventEmitter<string>()
  
  public pageName:string[]=[]
  

  ngOnInit(): void {
    this.pageName=this.notService.namesPage
    
  }

  BreadCrampClicked(value:string){
    this.EventPageName.emit(value)
  }



}
