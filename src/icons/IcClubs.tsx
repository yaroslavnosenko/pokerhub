import { SVGProps } from 'react'

export const IcClubs = ({ ref, ...props }: SVGProps<SVGElement>) => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        r="3"
        cx="7"
        cy="17"
        stroke="currentColor"
        stroke-width="2"
        fill="transparent"
      />
      <circle
        r="3"
        cx="17"
        cy="17"
        stroke="currentColor"
        stroke-width="2"
        fill="transparent"
      />
      <circle
        r="3"
        cx="12"
        cy="8"
        stroke="currentColor"
        stroke-width="2"
        fill="transparent"
      />
    </svg>
  )
}
