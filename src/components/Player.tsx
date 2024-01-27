import { Player as TPlayer } from '@/types'
import { emoji } from '@/utils'

type PlayerProps = {
  player: TPlayer
}

export const Player = ({ player: { name, bankroll } }: PlayerProps) => {
  return (
    <div className="flex flex-col items-center gap-1 mt-6">
      <div className="text-2xl">{emoji(name)}</div>
      <div className="text-xs opacity-60">{name}</div>
      <div className="text-sm">{bankroll}</div>
    </div>
  )
}
