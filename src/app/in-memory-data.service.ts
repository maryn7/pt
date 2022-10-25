import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 2, name: 'Ironman' },
      { id: 3, name: 'Captain America' },
      { id: 4, name: 'Spiderman' },
      { id: 5, name: 'Thor' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Batman' },
      { id: 8, name: 'Superman' },
      { id: 9, name: 'Dr. Strange' },
      { id: 10, name: 'DeadPool' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


