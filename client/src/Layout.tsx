import { BtnProps } from "./components/Btn/Btn.types";
import {
  useLocation,
  useNavigate,
  Outlet,
  useParams,
  generatePath,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import ComponentBar from "./components/ComponentBar";
import { ComponentOrientation } from "@react-project/shared/components";
import Btn from "./components/Btn";
import DropdownMenu from "./components/DropdownMenu";
import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";

const Layout = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const supportedLangs = ["en", "da", "fr"];

  useEffect(() => {
    // Default to English if the language is unsupported.
    if (!lang || !supportedLangs.includes(lang)) {
      navigate("/en/home", { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  const changeLangUrl = (newLang: string) => {
    const pathSegments = location.pathname.split("/");

    pathSegments[1] = newLang;

    navigate(pathSegments.join("/"));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const dropdownMenuItems: BtnProps[] = [
    {
      // onClick: () => i18n.changeLanguage("en"),
      onClick: () => changeLangUrl("en"),
      btnText: "English",
      hasShadow: false,
    },
    {
      // onClick: () => i18n.changeLanguage("da"),
      onClick: () => changeLangUrl("da"),
      btnText: "Dansk",
      hasShadow: false,
    },
    {
      // onClick: () => i18n.changeLanguage("fr"),
      onClick: () => changeLangUrl("fr"),
      btnText: "Français",
      hasShadow: false,
    },
  ];

  const navBtnsTest = [
    <Btn
      iconName="home"
      btnText={t("nav-bar.home")}
      onClick={() => navigate("home")}
    />,
    <Btn
      iconName="rss"
      btnText={t("nav-bar.blog")}
      onClick={() => navigate("blog")}
    />,
    <Btn
      iconName="user"
      btnText={t("nav-bar.cv")}
      onClick={() => navigate("about")}
    />,
    <DropdownMenu
      dropdownMenuIconName="earth"
      dropdownMenuLabel={t("nav-bar.lang")}
      dropdownMenuItems={dropdownMenuItems}
    />,
    <Btn
      iconName={isDarkMode ? "moon" : "sun"}
      btnText={isDarkMode ? t("settings.dark-mode") : t("settings.light-mode")}
      onClick={() => setIsDarkMode((prev) => !prev)}
    />,
    <div className="flex-grow" key="spacer-1" />,
    <Btn
      iconName="mail"
      btnText={t("contact-info.mail")}
      href="mailto:nick.joergensen1@protonmail.com"
    />,
    <Btn
      iconName="linkedin"
      btnText={t("socials.linkedin")}
      href="https://www.linkedin.com/in/nick-j%C3%B8rgensen-22735293/"
    />,
    <Btn
      iconName="github"
      btnText={t("socials.github")}
      href="https://github.com/nixor-1"
    />,
  ];

  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
      <div className="row-start-1">
        <ComponentBar
          orientation={ComponentOrientation.HORIZONTAL}
          sepBar={true}
          components={navBtnsTest}
        />
      </div>

      <main className="items-center row-start-2 h-full w-full overflow-y-auto flex flex-col justify-between">
        <div className="w-full flex-grow">
          <Outlet />
        </div>

        <footer className="text-center pb-6">
          <TextBox
            className="md:border-0 border-2 border-color-primary rounded-rounding-primary"
            textBoxContent={
              <p className="text-gray-500">{t("copyright-message")}</p>
            }
          />
        </footer>
      </main>
    </div>
  );
};

export default Layout;
