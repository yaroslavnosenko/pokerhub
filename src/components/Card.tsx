import { Suit, Card as CardType } from '@/types'
import clazz from 'classnames'
import { IcDiamond, IcHeart, IcSpade, IcClubs } from '@/icons'

const SuitMap = {
  [Suit.DIAMOND]: <IcDiamond />,
  [Suit.CLUBS]: <IcClubs />,
  [Suit.HEART]: <IcHeart />,
  [Suit.SPADE]: <IcSpade />,
}

type CardProps = {
  card?: CardType
}

export const Card = ({ card }: CardProps) => {
  const className = clazz(
    'bg-white rounded-3xl w-20 h-24 relative shadow-2xl',
    {
      'text-red': card?.suit === Suit.DIAMOND || card?.suit === Suit.HEART,
      'text-black': card?.suit === Suit.SPADE || card?.suit === Suit.CLUBS,
    }
  )
  const isHidden = card === undefined
  return (
    <div className={className}>
      {!isHidden && (
        <div className="p-3 pb-4 h-full flex flex-col justify-between">
          <div className="text-xl w-6 text-center">{card.rank}</div>
          <div>{SuitMap[card.suit]}</div>
        </div>
      )}
      {isHidden && (
        <div className="h-full overflow-hidden p-2">
          <div className="h-full bg-stripes rounded-2xl" />
        </div>
      )}
    </div>
  )
}
