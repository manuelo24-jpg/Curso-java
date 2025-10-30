import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Carrito } from './carrito/carrito';
import { CarritoSignals } from './carrito-signals/carrito-signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrito, CarritoSignals],
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
