import { UserSeat } from './user-seat';

export class RutaActual {
  'email': string;
  'lon': number;
  'lat': number;
  'comuna': string;
  'tarifa': number;
  'clientes': Array<UserSeat>;
  'patente': string;
  'asientos': number;
  'conductor': string;
}
