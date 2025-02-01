import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  constructor(){}

  public MODE:'MAIN'|'TAGS'='MAIN'
  public SAVE_QUESTION:boolean=false
  public item=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]
  ChangeMode(){

  }

  NewQuestion(){

  }
}
