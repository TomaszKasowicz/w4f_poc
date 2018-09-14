import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MainReservation, BoardReservation } from './model';
const boards = require('../assets/boards.json');
const clients = require('../assets/clients.json');

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log(clients);
    console.log(boards);
    const mainReservations = [
      {
        id : 0,
        client_id: 0,
        info: '',
        date: '',
      }
    ];
    const boardReservations = [
      {
        id : 0,
        mainReservationId: 0,
        info: '',
        type: '',
        unit: '',
        slots: 0
      }
    ];
    return {clients, mainReservations, boardReservations, boards};
  }
}
