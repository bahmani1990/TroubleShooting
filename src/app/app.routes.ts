import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfileComponent } from './profile/profile.component';
import { TagsComponent } from './tags/tags.component';
import { MainComponent } from './main/main.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SimpleComponent } from './simple/simple.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'main',component:MainComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'tags',component:TagsComponent},
];
