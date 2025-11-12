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

  crearUsuario(usuario: { id: number, nombre: string, email: string }) {
    this.usuarios.push(usuario);
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  actualizarUsuario(id: number, datosActualizados: { nombre?: string, email?: string }) {
    const usuario = this.getUsuarioPorId(id);
    if (usuario) {
      Object.assign(usuario, datosActualizados);
    }
  }

  comprobarEmailExistente(email: string): boolean {
    return this.usuarios.some(usuario => usuario.email === email);
  }

}
