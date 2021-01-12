import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
