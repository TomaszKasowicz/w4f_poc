import { InMemoryDbService } from 'angular-in-memory-web-api';
const boards = require('../assets/boards.json');
const clients = require('../assets/users.json');

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log(clients);
    console.log(boards);
    const mainReservations: any[] = [];
    const boardReservations: any[] = [];
    return {clients, mainReservations, boardReservations, boards};
  }
}
