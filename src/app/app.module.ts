import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PenocSdkModule } from 'penoc-sdk/penoc-sdk.module';
import { AppComponent } from './components/app/app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { CompetitorComponent } from './components/competitor/competitor.component';
import { CompetitorEditorComponent } from './components/competitor-editor/competitor-editor.component';
import { CompetitorListComponent } from './components/competitor-list/competitor-list.component';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LookupEditorComponent } from './components/lookup-editor/lookup-editor.component';
import { ModalMessageBoxComponent } from './components/modal-message-box/modal-message-box.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { OEventComponent } from './components/oevent/oevent.component';
import { OEventListComponent } from './components/oevent-list/oevent-list.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { DateStringPipe } from './pipes/date-string.pipe';
import { MatchingCompetitorsPipe } from './pipes/matching-competitors.pipe';
import { PeoplePipe } from './pipes/people.pipe';
import { ResultTimePipe } from './pipes/result-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ButtonBarComponent,
    CompetitorComponent,
    CompetitorEditorComponent,
    CompetitorListComponent,
    CourseComponent,
    CourseListComponent,
    FileUploadComponent,
    LookupEditorComponent,
    ModalMessageBoxComponent,
    NewsListComponent,
    NewsItemComponent,
    OEventComponent,
    OEventListComponent,
    ResultListComponent,
    DateStringPipe,
    MatchingCompetitorsPipe,
    PeoplePipe,
    ResultTimePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PenocSdkModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
