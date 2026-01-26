import { useTranslation } from "react-i18next";
import PageMargins from "../../components/PageMargins";
import TextBox from "../../components/TextBox";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageMargins pageMarginsWidth="large">
      <TextBox textBoxTitle={t('home-page.welcome-text-header')} textBoxContent={t('home-page.welcome-text-body')} />
    </PageMargins>
  );
};

export default HomePage;
