import TextBox from "../../components/TextBox";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";
import WelcomeTextBody from "./WelcomeTextBody";
import WebsiteStatusTextBody from "./WebsiteStatusTextBody";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  const spacingStyles =
    "pb-0 border-b border-color-primary md:pb-6 md:border-b-0";

  return (
    <PageMarginsNew pageMarginsWidth="2" isScrollable={true}>
      <div className={`${spacingStyles} border-b-1 border-color-primary`}>
        <TextBox
          textBoxTitle={t("home-page.welcome.title")}
          textBoxContent={<WelcomeTextBody />}
        />
      </div>
      <div className={`${spacingStyles} border-b-1 border-color-primary`}>
        <TextBox
          textBoxTitle={t("home-page.status.title")}
          textBoxContent={<WebsiteStatusTextBody />}
        />
      </div>
    </PageMarginsNew>
  );
};

export default HomePage;
