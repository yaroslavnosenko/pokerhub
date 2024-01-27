import { SVGProps } from 'react'

export const IcDiamond = ({ ref, ...props }: SVGProps<SVGElement>) => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        width="10"
        stroke-width="2"
        stroke="currentColor"
        height="10"
        x="7"
        y="7"
        transform="rotate(45 12 12)"
        fill="transparent"
      />
    </svg>
  )
}
