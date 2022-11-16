import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from 'src/app/shell/layouts/app-layout/app-layout.component';
import { LayoutModule } from 'src/app/shell/layouts/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashbordComponent },
    ]
  }
]

@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ]
})
export class DashbordModule { }
