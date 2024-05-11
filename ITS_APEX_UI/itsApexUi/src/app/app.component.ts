import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MenuTabsComponent } from './common/menu-tabs/menu-tabs.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MenuTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'itsApexUi';
  tabList : Array<modulesObject> =[];
  a:modulesObject = {
    id: "carier",
    name: "Carier Login"
  }
  b:modulesObject = {
    id: "carier",
    name: "Carier Login"
  }
  ngOnInit(){
    
    this.tabList.push(this.a);
    this.tabList.push(this.b);
    this.tabList.push(this.b);
    this.tabList.push(this.b);
    this.tabList.push(this.b);
    this.tabList.push(this.b);
    this.tabList.push(this.b);
    
  }
}
export class modulesObject{
  name!: String;
  id! :String;
}