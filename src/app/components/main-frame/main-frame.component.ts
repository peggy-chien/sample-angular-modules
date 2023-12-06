import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './main-frame.component.html',
  styleUrl: './main-frame.component.scss'
})
export class MainFrameComponent {

}
