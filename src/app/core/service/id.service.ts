import { Injectable } from '@angular/core';
import { idServiceSource } from './id.service.const';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  constructor() {}

  nextId(): string {
    const id: string[] = [];
    const template = idServiceSource.split('').sort(() => (Math.random() > 0.5 ? -1 : +1));

    for (let i = 0; i < 6; i++) {
      const position = Math.floor(Math.random() * template.length);
      id.push(template[position]);
    }

    return id.join('');
  }
}
