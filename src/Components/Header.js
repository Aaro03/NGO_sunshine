import React from 'react'
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='bg-black text-white'>
        <div className='flex px-4 py-2 items-center justify-between mx-auto'>
            <div className="text-orange-400 font-bold text-lg text-left"> 
                SUNSHINE RESCUE
            </div>
            <div className="ml-auto">
            <ul className="flex space-x-4 font-bold text-white">
                <li>
                    <select className='text-black' onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="fr">Français</option>
                      <option value="kn">Kannada</option>
                    </select>
                </li>
                <li>
                <a href="/login" className="hover:text-orange-500">Login</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header
