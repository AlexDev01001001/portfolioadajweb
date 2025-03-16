import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-music-side',
  standalone: true,
  imports: [],
  templateUrl: './music-side.component.html',
  styleUrl: './music-side.component.css'
})
export class MusicSideComponent implements AfterViewInit{
  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {  // Asegura que solo se ejecute en el navegador
      const Plyr = (await import('plyr')).default;
      const player = new Plyr('#player');
      console.log('Plyr inicializado:', player);
    }
  }

}