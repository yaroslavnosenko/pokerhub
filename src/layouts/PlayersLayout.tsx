import { PropsWithChildren } from 'preact/compat'

export const PlayersLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4 flex items-start justify-center gap-8">{children}</div>
  )
}
