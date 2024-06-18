import Shifts from '@/lib/Shifts'
import Monday from '@/lib/Monday'
import * as util from 'node:util'
import Header from '@/components/header/header'

export default async function Page() {
  const thisMonday = Monday.getMonday()
  const thisMondayF = thisMonday.toLocaleString(undefined, { day: '2-digit', month: '2-digit', year: '2-digit' })

  const thisWeekShifts = await Shifts.getThisWeek()

  return (
    <main className='px-3 pb-10'>

      <Header />

      <h3 className='mb-4 text-lg uppercase text-gray-600 tracking-widest'>Esta semana · {thisMondayF}</h3>

      <section className='mx-4 flex flex-wrap justify-center gap-2'>
        {thisWeekShifts.length === 0 &&
          <p className='max-w-xl italic text-gray-700 text-sm bg-gray-200 flex-grow text-center p-4 rounded'>
            No hay turnos esta semana
          </p>
        }
        {thisWeekShifts.length !== 0 &&
          thisWeekShifts.map((shift) => (
            <div
              key={`${shift.date.toString()}V${shift.version}`}
              className={`
               ${shift.type}
               rounded py-3 px-4 flex-grow [flex-basis:8em] max-w-56
               [&.midweek]:bg-indigo-200 [&.weekend]:bg-amber-200 [&.other]:bg-rose-200
              `}
            >
              <h4 className='uppercase text-sm font-bold tracking-wide text-center'>
                {shift.date.toLocaleString(undefined, { weekday: 'long' })}
              </h4>
              <ul className='text-center'>
                {shift.brothersShifts.length === 0 &&
                  <p className='italic text-gray-600'>No hay hermanos asignados</p>
                }
                {shift.brothersShifts.length !== 0 &&
                  shift.brothersShifts.map((brotherShift, i) => (
                    <li key={brotherShift.brother.id}>
                      <span
                        className={`block mx-auto w-10 my-1 ${i !== 0 && 'border-t border-[rgba(0,0,0,.1)]'}`}
                      ></span>
                      {brotherShift.brother.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>

    </main>
  )
}
