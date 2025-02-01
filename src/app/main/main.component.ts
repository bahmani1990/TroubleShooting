import { Component,Type } from '@angular/core';
import { QuestionsComponent } from "../questions/questions.component";
import { ProfileComponent } from "../profile/profile.component";
import { TagsComponent } from "../tags/tags.component";
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../services/notification.service';
import { BreadCrampComponent } from "../bread-cramp/bread-cramp.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProfileComponent, QuestionsComponent, TagsComponent, NgbDropdownModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
constructor(
  public notifiService:NotificationService
){}

public MODE:'QUESTIONS'|'PROFILE'|'TAGS'='QUESTIONS';
public MODE_PROFILE:'MY_QUESTIONS'|'SAVES'|'SITTING'='MY_QUESTIONS';
public modeQuestion :string='NotNewQuestion'
public openProfile :boolean=false


ChangeComponent(event:any){
  this.MODE=event
}

}

