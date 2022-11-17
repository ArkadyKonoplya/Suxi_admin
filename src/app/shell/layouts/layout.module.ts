import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ShellModule } from '../shell.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/app.module';

const routes: Routes = [];

@NgModule({
    declarations: [
        AppLayoutComponent,
        AuthLayoutComponent
    ],
    exports: [
        AuthLayoutComponent,
        AppLayoutComponent,
    ],
    imports: [
        CommonModule,
        ShellModule,
        RouterModule.forChild(routes),
        MaterialModule,
    ]
})
export class LayoutModule { }
