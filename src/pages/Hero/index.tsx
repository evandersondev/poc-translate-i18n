import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const [language] = useState(localStorage.getItem('i18nextLng')!)

  function changeLanguage(value: string) {
    localStorage.setItem('i18nextLng', value)
    i18n.changeLanguage(value)
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            {t('homeHeroTitle')}
          </h2>
          <p className="my-5  text-xl text-gray-600">
            {t('homeHeroDescription')}
          </p>
          <button className="px-8 py-4 rounded-md bg-amber-500 text-white">
            {t('homeHeroButtonAboutUs')}
          </button>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <label
            htmlFor="currency"
            className="block text-base font-medium text-gray-500"
          >
            {t('homeHeroSelectTitle')}
          </label>
          <div className="mt-1.5 relative">
            <select
              className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              defaultValue={language}
              onChange={event => changeLanguage(event.target.value)}
            >
              <option value="de-DE">{t('homeHeroSelectOptionDeDe')}</option>
              <option value="en-US">{t('homeHeroSelectOptionEnUS')}</option>
              <option value="es-ES">{t('homeHeroSelectOptionEsEs')}</option>
              <option value="pt-BR">{t('homeHeroSelectOptionPtBr')}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
