import MenuButton from '@/components/header/menu-button'
import { FC, ReactNode, SVGProps } from 'react'
import TableCells from '@/components/icons/table-cells'
import Users from '@/components/icons/users'
import BellAlert from '@/components/icons/bell-alert'

export default function Header() {
  return (
    <header className='mb-6 flex flex-wrap justify-between items-center'>
      <h1 className='text-4xl'>Micros</h1>
      <MenuButton />
      <nav className={`
        flex-[100%] grid transition-all
        grid-rows-[0fr] [.open+&]:grid-rows-[1fr]
        px-4 [.open+&]:py-8
      `}>
        <ul className={`overflow-hidden flex flex-wrap gap-3 min-[1px]:flex-col`}>
          <li><NavButton Icon={TableCells}>Ver todos los horarios</NavButton></li>
          <li><NavButton Icon={Users}>Lista de hermanos</NavButton></li>
          <li><NavButton Icon={BellAlert}>Gestionar avisos</NavButton></li>
        </ul>
      </nav>
    </header>
  )
}

function NavButton({ children, Icon }: { children: ReactNode, Icon: FC<SVGProps<SVGSVGElement>> }) {
  return (
    <button className='w-full flex items-center rounded border py-2 text-sm hover:bg-gray-50'>
      <span className='px-4'><Icon className='size-5' /></span>
      <span className='pe-4 mx-auto'>{children}</span>
    </button>
  )
}
