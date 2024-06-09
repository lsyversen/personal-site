import { Inter } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

export default function LayoutWrapper({ children }: Props) {
  return (
    <SectionContainer>
      <div
        // className={`${inter.className} mx-auto flex max-w-2xl flex-col px-4 sm:px-6 xl:max-w-4xl xl:px-0`}
        className={`container mx-auto flex  h-screen flex-col px-10 ${inter.className}`}
      >
        <Header />
        <main>{children}</main>
        <div className="grow" />
        <Footer />
      </div>
    </SectionContainer>
  )
}
