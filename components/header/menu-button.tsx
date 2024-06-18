'use client'

import Bars2 from '@/components/icons/bars-2'

export default function MenuButton() {
  return (
    <button title='Menu' onClick={(e) => e.currentTarget.classList.toggle('open')}>
      <Bars2 className='size-4 my-3 mx-4' />
    </button>
  )
}