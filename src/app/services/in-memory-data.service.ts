import { Injectable } from '@angular/core';
import { locationDropdown } from '../spec-helpers/in-memory-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    return {
      locationDropdown
    };
  }
}
