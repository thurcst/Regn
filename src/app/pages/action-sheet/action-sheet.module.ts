import { AlertPageModule } from './../alert/alert.module';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children:[
      {
        path: 'alert',
        loadChildren: '../alert/alert.module#AlertPageModule'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
