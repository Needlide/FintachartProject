export interface PriceUpdate {
  type: string;
  instrumentId: string;
  provider: string;
  last: Last;
}

interface Last {
  timestamp: string;
  price: number;
  volume: number;
  change: number;
  changePct: number;
}
