import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class PeliculaService {

    saludoServicio(): void {
        console.log('Saludos desde el servicio de Pelicula');
    }
}