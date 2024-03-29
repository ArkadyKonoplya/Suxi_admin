import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from './components/loader/loader.module';
import { ButtonModule } from './components/button/button.module';
import { IconModule } from './components/icon/icon.module';
import { InputModule } from './components/input/input.module';
import { AnchorModule } from './components/anchor/anchor.module';
import { MdModule } from './md/md.module';
import { ForbiddenErrorModule } from './components/forbidden-error/forbidden-error.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MdModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    LoaderModule,
    ButtonModule,
    IconModule,
    InputModule,
    AnchorModule,
    ForbiddenErrorModule
  ],
})
export class SharedModule { }
