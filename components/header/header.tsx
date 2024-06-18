import MenuButton from '@/components/header/menu-button'
import Navigation from '@/components/navigation'

export default function Header() {
  return (
    <header className='mb-6 flex flex-wrap justify-between items-center'>
      <h1 className='text-4xl'>Micros</h1>
      <MenuButton />
      <Navigation />
    </header>
  )
}

