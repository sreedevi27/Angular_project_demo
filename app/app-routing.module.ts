import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  { path: 'rxjs-learning', component: RxjsLearningComponent },

  {
    path: 'users',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'delete/:id', component: DeleteUsersComponent },
      { path: 'edit/:id', component: EditUsersComponent },
      { path: 'view/:id', component: ViewUsersComponent },
      { path: 'create', component: AddUsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
