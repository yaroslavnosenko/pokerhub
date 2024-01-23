import { Suit } from '@/types'
import { Card } from '@/components'

export const Deck = () => {
  return (
    <div className="flex gap-6 items-center justify-center w-96 flex-wrap">
      <Card value="Q" suit={Suit.CLUBS} />
      <Card value="A" suit={Suit.DIAMOND} />
      <Card value="K" suit={Suit.SPADE} />
      <Card value="2" suit={Suit.HEART} />
      <Card value="7" suit={Suit.CLUBS} />
    </div>
  )
}
