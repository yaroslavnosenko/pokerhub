import { Card } from '@/components'
import { Rank, Suit } from '@/types'

export const Hand = () => {
  return (
    <div class="w-36">
      <div class="grid grid-cols-hand">
        <Card card={{ suit: Suit.CLUBS, rank: Rank.Deuce }} />
        <Card card={{ suit: Suit.SPADE, rank: Rank.Four }} />
      </div>
    </div>
  )
}
