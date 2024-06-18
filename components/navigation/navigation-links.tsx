import TableCells from '@/components/icons/table-cells'
import Users from '@/components/icons/users'
import BellAlert from '@/components/icons/bell-alert'
import { FC, ReactNode, SVGProps } from 'react'

export default function NavigationLinks() {
  return (
    <>
      <li><NavButton Icon={TableCells}>Ver todos los horarios</NavButton></li>
      <li><NavButton Icon={Users}>Lista de hermanos</NavButton></li>
      <li><NavButton Icon={BellAlert}>Gestionar avisos</NavButton></li>
    </>
  )
}

function NavButton({ children, Icon }: { children: ReactNode, Icon: FC<SVGProps<SVGSVGElement>> }) {
  return (
    <button className='w-full max-w-80 mx-auto flex items-center rounded border py-2 text-sm hover:bg-gray-50'>
      <span className='px-4'><Icon className='size-5' /></span>
      <span className='pe-4 mx-auto'>{children}</span>
    </button>
  )
}