import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashComponent } from './studentdash/studentdash.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'studentdash',
    pathMatch: 'full'
  },
  {
    path: 'studentdash',
    component: StudentdashComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
