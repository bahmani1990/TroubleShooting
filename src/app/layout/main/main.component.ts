import { Component, inject } from '@angular/core';
import { QuestionsComponent } from "./questions/questions.component";
import { ProfileComponent } from "./profile/profile.component";
import { TagsComponent } from "./tags/tags.component";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-main',
    imports: [ProfileComponent, QuestionsComponent, TagsComponent, NgbDropdownModule],
    templateUrl: './main.component.html'
})
export class MainComponent {


public MODE:'QUESTIONS'|'PROFILE'|'TAGS'='QUESTIONS';
public MODE_PROFILE:'MY_QUESTIONS'|'SAVES'|'SITTING'='MY_QUESTIONS';
public modeQuestion :string='NotNewQuestion'
public openProfile :boolean=false


ChangeComponent(event:any){
  this.MODE=event
}

}

