import { Rank, Suit } from '@/types'
import { Card } from '@/components'

export const Deck = () => {
  return (
    <div className="grid grid-cols-deck col-span-2">
      <Card card={{ suit: Suit.CLUBS, rank: Rank.Ace }} />
      <Card card={{ suit: Suit.DIAMOND, rank: Rank.Ten }} />
      <Card card={{ suit: Suit.SPADE, rank: Rank.Queen }} />
      <Card />
      <Card />
    </div>
  )
}
