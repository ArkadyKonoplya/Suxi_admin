import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FixedpluginComponent } from './fixedplugin/fixedplugin.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    FixedpluginComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, FooterComponent,NavbarComponent,FixedpluginComponent,SidebarComponent],
})
export class ShellModule { }
