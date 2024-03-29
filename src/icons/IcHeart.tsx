import { SVGProps } from 'react'

export const IcHeart = ({ ref, ...props }: SVGProps<SVGElement>) => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon
        points="12 16, 6 6, 18 6"
        fill="transparent"
        stroke-width="2"
        stroke="currentColor"
      />
    </svg>
  )
}
