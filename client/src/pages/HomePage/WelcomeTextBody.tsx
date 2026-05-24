import { useTranslation } from "react-i18next";

const WelcomeTextBody = () => {
  const { t } = useTranslation();

  return <p>{t("home-page.welcome.text-body")}</p>;
};

export default WelcomeTextBody;
