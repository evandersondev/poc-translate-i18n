import { useTranslation } from 'react-i18next'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { SVGProps } from 'react'
import { Hero } from '../Hero'
import { Header } from '../Header'
import { Footer } from '../Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export { HomePage }
