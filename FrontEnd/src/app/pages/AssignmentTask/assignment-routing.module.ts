import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentComponent } from './assignment.component';
import { AssignmentPageComponent } from './assignment-page/assignment-page.component';

const routes: Routes = [{
  path: '',
  component: AssignmentComponent,
  children: [{
    path: 'Assignment',
    component: AssignmentPageComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentRoutingModule { }

export const routedComponents = [
  AssignmentComponent,
  AssignmentPageComponent,
];
