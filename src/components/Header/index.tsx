import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()

  const navigation = [
    { name: t('homeNavSolutuions'), href: '#' },
    { name: t('homeNavPricing'), href: '#' },
    { name: t('homeNavDocs'), href: '#' },
    { name: t('homeNavCompany'), href: '#' },
  ]

  return (
    <header className="bg-amber-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-amber-600 lg:border-none">
          <div className="w-full flex flex-row justify-between items-center">
            <a href="#">
              <span className="text-white font-medium text-lg">EVA.</span>
            </a>
            <div className="hidden space-x-8 lg:block">
              {navigation.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export { Header }
