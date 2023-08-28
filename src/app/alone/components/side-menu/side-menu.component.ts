import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component  } from '@angular/core';
import { MenuItem } from '../../../maps/interfaces/menu-item.interface';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      route: '/maps/zoom',
      name: 'Zoom',
    },
    {
      route: '/maps/markers',
      name: 'Markers',
    },
    {
      route: '/maps/properties',
      name: 'Properties',
    },
    {
      route: '/alone',
      name: 'Alone Page',
    },
  ]
}
