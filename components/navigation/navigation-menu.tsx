import { clsx } from 'clsx'
import NavigationLinks from '@/components/navigation/navigation-links'

// todo: finish the component split
// use a custom variant: https://accreditly.io/articles/how-to-add-your-own-variants-like-hover-to-tailwind

export default function NavigationMenu() {
  return <nav className={clsx(
    'grid [@media(850px<=width)]:hidden',
    'border-b bg-blur px-4',
    '[.open+&]:py-8 [@media(550px<width)]:[.open+&]:py-6',
    'absolute top-full left-0 w-full',
    'grid flex-[100%]',
    'transition-all',
    'grid-rows-[0fr] [.open+&]:grid-rows-[1fr]',
    'opacity-0 [.open+&]:opacity-100',
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
