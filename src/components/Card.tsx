import { Suit } from '@/types'
import clazz from 'classnames'
import { IcDiamond, IcHeart, IcSpade, IcClubs } from '@/icons'

const SuitMap = {
  [Suit.DIAMOND]: <IcDiamond />,
  [Suit.CLUBS]: <IcClubs />,
  [Suit.HEART]: <IcHeart />,
  [Suit.SPADE]: <IcSpade />,
}

type CardProps = {
  suit: Suit
  value: string
}

export const Card = ({ value, suit }: CardProps) => {
  const className = clazz(
    'bg-gray-900 border-gray-700 rounded-lg p-2 py-3 w-20 h-28 border-[1px]',
    {
      'text-red-400': suit === Suit.DIAMOND || suit === Suit.HEART,
      'text-white': suit === Suit.CLUBS || suit === Suit.SPADE,
    }
  )
  return (
    <div className={className}>
      <div className="w-6">
        <div className="w-6 h-6 leading-[24px] text-center">{value}</div>
        <div>{SuitMap[suit]}</div>
      </div>
    </div>
  )
}
