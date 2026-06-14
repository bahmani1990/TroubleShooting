import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';


@Component({
  selector: 'app-bread-cramp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bread-cramp.component.html',
})
export class BreadCrampComponent implements OnInit{

 private utilityService:UtilityService=inject(UtilityService);
 
  
  @Output() EventPageName=new EventEmitter<string>()
  
  public pageName:string[]=[]
  

  ngOnInit(): void {
    debugger
    this.pageName=this.utilityService.namesPage
    
  }

  BreadCrampClicked(value:string){
    debugger
    this.EventPageName.emit(value)
  }



}
