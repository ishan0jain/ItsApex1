import { NgFor } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { modulesObject } from '../../app.component';



@Component({
  selector: 'app-menu-tabs',
  standalone: true,
  imports: [MatTabsModule,NgFor],
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.css',
})
export class MenuTabsComponent {
  @Input({ required: true }) 
  tabsList!: Array<modulesObject>;

}
