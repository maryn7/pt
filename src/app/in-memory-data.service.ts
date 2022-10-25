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

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


