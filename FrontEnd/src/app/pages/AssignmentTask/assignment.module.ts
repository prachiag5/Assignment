import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AssignmentRoutingModule, routedComponents } from './assignment-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AssignmentRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AssignmentModule { }
