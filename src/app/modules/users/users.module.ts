import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from 'src/app/shell/layouts/app-layout/app-layout.component';
import { LayoutModule } from 'src/app/shell/layouts/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'src/app/shared/md/md.module';
import { UsersListComponent } from './users-list/users-list.component';
import { MaterialModule } from 'src/app/app.module';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: UsersListComponent },
    ]
  }
]

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    RouterModule.forChild(routes),
    LayoutModule
  ]
})
export class UsersModule { }
