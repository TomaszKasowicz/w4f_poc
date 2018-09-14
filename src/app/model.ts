export enum ReservationTypes {
  BOARD = 1,
  SAIL = 2,
  BOARD_AND_SAIL = 3,
  HARNESS,
  BIKE,
  TRAINING
}

enum ReservationUnits {
  HALF_HOUR,
  HOUR,
  DAY
}

export enum AssetLocation {
  BEACH,
  WAREHOUSE,
  SERVICE,
  BASE
}

export class Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mainReservations: number[];
}

export class MainReservation {
  id: number;
  client_id: number;
  info: string;
  date: string;
  assetReservations: number[];
}

export class AssetReservation {
  id: number;
  mainReservationId: number;
  info: string;
  type: ReservationTypes;
  unit: ReservationUnits;
  slots: number;
}

export class BoardReservation extends AssetReservation {
  board: number;
}


export class Board {
  location: AssetLocation;

  constructor(
    public num: number,
    public name: string,
    public volume: number,
    public high_tech: boolean,
    loc: string
  ) {
    this.location = AssetLocation[loc];
  }
}
