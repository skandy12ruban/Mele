import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { LessonsComponent } from './components/lessons/lessons.component';
import { CommonComponentsModule } from 'src/app/common/common.module';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ToolsComponent } from './components/tools/tools.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonComponentsModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    LessonsComponent,
    ProfileComponent,
    QuizComponent,
    ToolsComponent,
  ],
})
export class HomePageModule {}
