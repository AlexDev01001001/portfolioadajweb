import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyComponent } from '../body/body.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MusicSideComponent } from '../music-side/music-side.component';
import { EndComponent } from '../end/end.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent,BodyComponent,AboutMeComponent,ProjectsComponent,MusicSideComponent,EndComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
