import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aprender-angular');

  miProducto = {
    nombre: 'Producto de ejemplo',
    detalles: 'Este es un producto de ejemplo para demostrar Angular.',
    precio: 100,
    stock: true
  };
}
