import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sphinx-ng';
  essaiCourant:number = 0;
  resultat:string = '';
  nbEssais:number = 0;
  nombre:number = 0;
  init=false;

  verifier()
  {
    if(!this.init)
    {
      this.nombre = 1 + Math.floor(Math.random() * 1000)
      this.nbEssais = 0;
      this.init = true;
    }
  }
}
