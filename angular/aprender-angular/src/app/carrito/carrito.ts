import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  nombreTienda: string = 'Mi Tienda Angular';
  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = '';
  precioProducto: number = 37;
  contadorLimiteCupon: number = 0;

  ngOnInit() {
    this.comprobarNotificacion();
  }

  ngDoCheck() {
    this.comprobarNotificacion();
  }

  addProducto() {
    this.cantidadProductos++;
    this.totalCarrito += this.precioProducto;

    this.comprobarNotificacion();
  }

  add5Productos() {
    this.cantidadProductos += 5;
    this.totalCarrito += this.precioProducto * 5;
  }

  deleteProducto() {
    if (this.cantidadProductos > 0) {
      this.cantidadProductos--;
      this.totalCarrito -= this.precioProducto;
    }
    this.comprobarNotificacion();
  }

  vaciarCarrito() {
    this.cantidadProductos = 0;
    this.totalCarrito = 0;
    this.comprobarNotificacion();
  }

  aplicarDescuento() {
    if (this.contadorLimiteCupon <= 0 && this.totalCarrito > 0) {
      let descuento = this.totalCarrito * 0.2;
      this.totalCarrito -= descuento;
      this.totalCarrito = parseFloat(this.totalCarrito.toFixed(2));
    }
    this.comprobarNotificacion();
  }

  comprobarNotificacion() {
    let limitePrecio = 177;

    if (this.totalCarrito > limitePrecio) {
      this.notificacion = `¡Has alcanzado el total de ${limitePrecio} en tu carrito!`;
    } else {
      this.notificacion = '';
    }
  }

  reventarCupon() {
    this.contadorLimiteCupon++;
  }

}
