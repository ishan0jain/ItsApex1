import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
  imports: [MatToolbarModule,SearchBarComponent]
})
export class HeaderComponent {

}
