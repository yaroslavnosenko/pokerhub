import { PropsWithChildren } from 'preact/compat'

export const KeypadLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-4 pt-0 max-w-lg mx-auto w-full flex flex-col items-center gap-4">
      {children}
    </div>
  )
}
