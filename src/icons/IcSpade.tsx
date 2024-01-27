import { SVGProps } from 'react'

export const IcSpade = ({ ref, ...props }: SVGProps<SVGElement>) => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon
        points="12 8, 18 18, 6 18"
        fill="transparent"
        stroke-width="2"
        stroke="currentColor"
      />
    </svg>
  )
}
