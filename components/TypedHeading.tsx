import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
// import { Twemoji } from '../Twemoji'

export function TypedHeading() {
  const el = useRef(null)
  // let typed = React.useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Meet Liam!"],
      startDelay: 10,
      typeSpeed: 50,
      // backSpeed: 10,
      // backDelay: 1500,
      // loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className="font-sans text-3xl font-medium leading-tight text-gray-900 dark:text-gray-100 sm:pb-4 sm:text-5xl md:pb-0 md:text-6xl ">
      <span ref={el} />
    </div>
  )
}
