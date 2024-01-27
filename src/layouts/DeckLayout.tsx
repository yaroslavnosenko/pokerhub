import { PropsWithChildren } from 'preact/compat'

export const DeckLayout = ({ children }: PropsWithChildren) => {
  return <div class="w-[21rem] mx-auto flex flex-col gap-2">{children}</div>
}
