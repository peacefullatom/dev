import { Injectable } from '@angular/core';

import { idServiceLength, idServiceSource } from './id.service.const';

@Injectable({ providedIn: 'root' })
export class IdService {
  constructor() {}

  nextId(length?: number): string {
    const id: string[] = [];
    const template = idServiceSource
      .split('')
      .sort(() => (Math.random() > 0.5 ? -1 : +1));

    length = typeof length === 'number' && !!length ? length : idServiceLength;

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * template.length);
      id.push(template[position]);
    }

    return id.join('');
  }
}
