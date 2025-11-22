import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: './app.component.css'
})
export class AppComponent {
  title = 'flexbox_project';
  linkedinUrl: string = "https://www.linkedin.com/in/yvonnemadera/";
  githubUrl: string = "https://github_profile_url.com";
}
