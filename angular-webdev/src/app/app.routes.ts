import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ContactsComponent } from './contacts/contacts.component';


export const routes: Routes = [
    { path: 'app-course', component: CourseComponent },
    {path: 'app-contacts', component: ContactsComponent}
];

