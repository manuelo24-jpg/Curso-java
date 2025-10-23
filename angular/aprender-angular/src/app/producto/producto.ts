import { Component } from "@angular/core";


@Component({
    selector: 'mi-producto',
    templateUrl: './producto.html',
    styleUrls: ['./producto.css']
})

export class Producto {
    nombre: string;
    detalles: string;
    precio: number;
    stock: boolean;

    constructor(nombre: string, detalles: string, precio: number, stock: boolean) {
        this.nombre = nombre;
        this.detalles = detalles;
        this.precio = precio;
        this.stock = stock;
    }
}