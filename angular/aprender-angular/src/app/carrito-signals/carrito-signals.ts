import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.html',
  styleUrl: './carrito-signals.css'
})
export class CarritoSignals {

  contador = signal(20);
  incremento = signal(1);
  contadorX3 = computed(() => this.contador() * 3);

  incrementar() {
    //this.contador.set(this.contador() + 1);
    this.contador.update(valorActual => valorActual + this.incremento());
  }

  ngOnInit() {
    console.log('CarritoSignals cargado');
  }

  ngDoCheck() {
    console.log('CarritoSignals cambiado');
  }

}
