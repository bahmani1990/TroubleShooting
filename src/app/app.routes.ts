import { Routes } from '@angular/router';

import { QuestionsComponent } from './layout/main/questions/questions.component';
import { ProfileComponent } from './layout/main/profile/profile.component';
import { TagsComponent } from './layout/main/tags/tags.component';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'main',component:MainComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'tags',component:TagsComponent},
];
