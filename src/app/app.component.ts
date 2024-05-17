import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout/app.component.html',
  styleUrl: './layout/app.component.scss'
})
export class AppComponent {
  title = 'memoteca';
}
