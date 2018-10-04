import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OEventListComponent } from './components/oevent-list/oevent-list.component'
import { OEventComponent } from './components/oevent/oevent.component'
import { CourseListComponent } from './components/course-list/course-list.component'
import { CourseComponent } from './components/course/course.component'
import { NewsListComponent } from './components/news-list/news-list.component'
import { NewsItemComponent } from './components/news-item/news-item.component'
import { LookupEditorComponent } from './components/lookup-editor/lookup-editor.component'
import { CompetitorListComponent } from './components/competitor-list/competitor-list.component'

const routes: Routes = [
    { path: 'events', component: OEventListComponent },
    { path: 'events/:eventId', component: OEventComponent },
    { path: 'events/:eventId/courses', component: CourseListComponent },
    { path: 'events/:eventId/courses/:courseId', component: CourseComponent },
    { path: 'events/:eventId/courses/new', component: CourseComponent },
    { path: 'news', component: NewsListComponent },
    { path: 'news/:id', component: NewsItemComponent },
    { path: 'news/new', component: NewsItemComponent },
    { path: 'lookups', component: LookupEditorComponent },
    { path: 'competitors', component: CompetitorListComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
