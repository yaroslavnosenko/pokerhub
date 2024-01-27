import { Deck, Keypad, Bank, Hand, Player } from '@/components'
import { DeckLayout, GameLayout, KeypadLayout, PlayersLayout } from '@/layouts'
import { Player as TPlayer } from '@/types'

const mockPlayers: TPlayer[] = [
  {
    id: '936fd000-1b98-4f6d-bae5-53747e5eeaeb',
    name: 'John',
    bankroll: 250,
    chips: 0,
    cards: [],
  },
  {
    id: '8eb1d688-1863-4fb5-8a17-e10d2145e49c',
    name: 'Bill',
    bankroll: 720,
    chips: 78,
    cards: [],
  },
  {
    id: 'a71c37f5-6eee-4b8f-ba34-204e60be40aa',
    name: 'Sophie',
    bankroll: 82,
    chips: 0,
    cards: [],
  },
  {
    id: '4d8767c2-0153-4226-aceb-6fc0369f06db',
    name: 'Alex',
    bankroll: 44,
    chips: 24,
    cards: [],
  },
  {
    id: '113e7d9f-fe81-42ef-9ded-3a1cc4326b73',
    name: 'Peter',
    bankroll: 1060,
    chips: 0,
    cards: [],
  },
]

export const Game = () => {
  return (
    <GameLayout>
      <PlayersLayout>
        {mockPlayers.map((player, idx) => (
          <Player player={player} key={idx} />
        ))}
      </PlayersLayout>
      <DeckLayout>
        <Deck />
        <div className="flex w-full items-center justify-between">
          <div className="bg-green text-black min-w-7 rounded-full text-center p-[2px]">
            15
          </div>
          <Bank amount={24983324} />
        </div>
      </DeckLayout>
      <KeypadLayout>
        <Hand />
        <Keypad />
      </KeypadLayout>
    </GameLayout>
  )
}
