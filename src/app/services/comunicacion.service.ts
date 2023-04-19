import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  $emitter = new EventEmitter();
  $emitter2 = new EventEmitter();
  $emitter3 = new EventEmitter();

  constructor() { }

  emitirEvento() {
    this.$emitter.emit();
  }

  emitirEvento2(data: any) {
    this.$emitter2.emit(data);
  }

  emitirEvento3() {
    this.$emitter3.emit();
  }

}
