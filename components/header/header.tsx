import MenuButton from '@/components/header/menu-button'
import { FC, ReactNode, SVGProps } from 'react'
import TableCells from '@/components/icons/table-cells'
import Users from '@/components/icons/users'
import BellAlert from '@/components/icons/bell-alert'
import { clsx } from 'clsx/lite'

export default function Header() {
  return (
    <header className='mb-6 flex flex-wrap justify-between items-center'>
      <h1 className='text-4xl'>Micros</h1>
      <MenuButton />
      <nav className={clsx(
        'grid [@media(width<850px)]:flex-[100%]',
        'ease-in [transition:all_150ms,opacity_500ms]',
        '[@media(width<850px)]:grid-rows-[0fr] [.open+&]:grid-rows-[1fr]',
        '[@media(width<850px)]:opacity-0 [.open+&]:opacity-100',
        '[@media(width<850px)]:px-4 [@media(width<850px)]:[.open+&]:py-8',
      )}>
        <ul className={clsx(
          'overflow-hidden flex gap-3',
          '[@media(width<550px)]:flex-col',
          '[@media(550px<=width)]:flex-wrap',
        )}>
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
    <button className='w-full max-w-80 mx-auto flex items-center rounded border py-2 text-sm hover:bg-gray-50'>
      <span className='px-4'><Icon className='size-5' /></span>
      <span className='pe-4 mx-auto'>{children}</span>
    </button>
  )
}
