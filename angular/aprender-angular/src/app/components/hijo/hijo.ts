import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  @Input() nombreDelPadre: string = '';

  nombreDelHijo: string = 'Componente Hijo';

  @Output() saludoDelHijo = new EventEmitter<string>();

  enviarSaludo() {
    this.saludoDelHijo.emit(`Hola papá, te saluda tu hijo ${this.nombreDelHijo}`);
  }

}
