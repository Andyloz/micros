import { clsx } from 'clsx'
import NavigationLinks from '@/components/navigation/navigation-links'

export default function NavigationBar() {
  return <nav className={clsx(
    'border-b bg-blur',
    'absolute top-full left-0 w-full',
    '!hidden [@media(width<850px)]:flex-[100%]',
    'transition-all',
    '[@media(width<850px)]:grid-rows-[0fr] [.open+&]:grid-rows-[1fr]',
    '[@media(width<850px)]:opacity-0 [.open+&]:opacity-100',
    '[@media(width<850px)]:px-4',
    '[.open+&]:py-8 [@media(550px<width)]:[.open+&]:py-6 [@media(850px<width)]:[.open+&]:py-0',
  )}>
    <ul className={clsx(
      'overflow-hidden flex gap-3',
      '[@media(width<550px)]:flex-col',
      '[@media(550px<=width)]:flex-wrap',
    )}>
      <NavigationLinks />
    </ul>
  </nav>
}