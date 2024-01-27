import { PropsWithChildren } from 'react'

export const GameLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-[100svh] max-h-[100svh] flex flex-col justify-between">
      {children}
    </div>
  )
}
