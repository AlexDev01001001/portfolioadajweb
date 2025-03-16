import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToSection(sectionId:string):void{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
}
