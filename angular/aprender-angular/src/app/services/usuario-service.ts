import id from '@angular/common/locales/extra/id';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = [
    { id: 1, nombre: 'Juan Perez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Maria Gomez', email: 'maria.gomez@example.com' },
    { id: 3, nombre: 'Pedro Martinez', email: 'pedro.martinez@example.com' }
  ];

  getUsuarios() {
    {
      return this.usuarios;
    }
  }

  getUsuarioPorId(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

}
