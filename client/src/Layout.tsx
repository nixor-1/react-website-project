import { BtnProps } from "./components/Btn/Btn.types";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ComponentBar from "./components/ComponentBar";
import { ComponentOrientation } from "@react-project/shared/components";
import Btn from "./components/Btn";
import DropdownMenu from "./components/DropdownMenu";
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const dropdownMenuItems: BtnProps[] = [
    { onClick: () => i18n.changeLanguage('en'), btnText: "English", hasShadow: false },
    { onClick: () => i18n.changeLanguage('da'), btnText: "Dansk", hasShadow: false },
    { onClick: () => i18n.changeLanguage('fr'), btnText: "Français", hasShadow: false },
  ]

  const navBtnsTest = [
    <Btn
      iconName='dashboard'
      btnText={t('nav-bar.dashboard')}
      onClick={() => navigate('/dashboard')}
    />,
    <Btn
      iconName='settings'
      btnText={t('nav-bar.settings')}
      onClick={() => navigate('/settings')}
    />,
    <Btn
      iconName='rss'
      btnText={t('nav-bar.blog')}
      onClick={() => navigate('/blog')}
    />,
    <Btn
      iconName='user'
      btnText={t('nav-bar.about me')}
      onClick={() => navigate('/about')}
    />,
    <DropdownMenu
      dropdownMenuIconName='earth'
      dropdownMenuLabel={t('nav-bar.lang')}
      dropdownMenuItems={dropdownMenuItems}
    />,
    <Btn
      iconName={isDarkMode ? 'moon' : 'sun'}
      btnText={isDarkMode ? t('settings.dark-mode') : t('settings.light-mode')}
      onClick={() => setIsDarkMode(prev => !prev)}
    />,
    <Btn
      iconName='linkedin'
      btnText={t('socials.linkedin')}
      href='https://www.linkedin.com/in/nick-j%C3%B8rgensen-22735293/'
    />,
  ]

  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
      <div className="row-start-1">
        <ComponentBar
          orientation={ComponentOrientation.HORIZONTAL}
          sepBar={true}
          components={navBtnsTest}
        />
      </div>

      <div className="row-start-2 h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
