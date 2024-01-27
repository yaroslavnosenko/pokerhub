export enum Suit {
  DIAMOND,
  CLUBS,
  HEART,
  SPADE,
}

export enum Rank {
  Ace = 'A',
  King = 'K',
  Queen = 'Q',
  Jack = 'J',
  Ten = '10',
  Nine = '9',
  Eight = '8',
  Seven = '7',
  Six = '6',
  Five = '5',
  Four = '4',
  Three = '3',
  Deuce = '2',
}

export type Card = {
  suit: Suit
  rank: Rank
}

export type Player = {
  id: string
  name: string
  bankroll: number
  chips: number
  cards: Card[]
}
