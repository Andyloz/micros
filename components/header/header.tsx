import MenuButton from '@/components/header/menu-button'
import NavigationBar from '@/components/navigation/navigation-bar'
import { clsx } from 'clsx'
import NavigationMenu from '@/components/navigation/navigation-menu'

export default function Header() {
  return (
    <>
      <header className={clsx(
        'relative mb-6 -mx-3 px-3 py-4 border-b bg-blur',
      )}>
        <div className='flex flex-wrap justify-between items-center'>
          <h1 className='text-4xl'>Micros</h1>
          <MenuButton />
          <NavigationBar />
        </div>
      </header>
      <NavigationMenu />
    </>
  )
}