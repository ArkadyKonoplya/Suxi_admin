import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenErrorComponent } from './forbidden-error.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellModule } from "../../../shell/shell.module";

const routes: Routes = [
    {
      path: '',
      component: ForbiddenErrorComponent,
    }
  ]

@NgModule({
    declarations: [ForbiddenErrorComponent],
    exports: [ForbiddenErrorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ShellModule
    ]
})
export class ForbiddenErrorModule { }
