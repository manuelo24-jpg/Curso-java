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
    public mostrarPeliculas: boolean = true;

    constructor(nombre: string, detalles: string, precio: number, stock: boolean) {
        this.nombre = nombre;
        this.detalles = detalles;
        this.precio = precio;
        this.stock = stock;
    }

    ngOnInit() {
        // Inicialización si es necesario
        console.log(`Producto creado: ${this.nombre}`);
    }

    ngOnChanges() {
        // Manejar cambios en las propiedades si es necesario
        console.log(`Producto actualizado: ${this.nombre}`);
    }

    ngDoCheck() {
        // Lógica de detección de cambios personalizada
        console.log(`Verificación de cambios para: ${this.nombre}`);
    }

    ngAfterViewInit() {
        // Lógica después de que la vista haya sido inicializada
        console.log(`Vista inicializada para: ${this.nombre}`);
    }

    cambiarNombre() {
        this.nombre = "Nuevo nombre de producto";
    }

    ocultarPeliculas() {
        this.mostrarPeliculas = false;
    }
}