import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export default function Bars2(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none' viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 9h16.5m-16.5 6.75h16.5' />
    </svg>
  )
}