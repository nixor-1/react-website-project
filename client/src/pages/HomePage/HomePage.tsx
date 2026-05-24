import TextBox from "../../components/TextBox";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";
import WelcomeTextBody from "./WelcomeTextBody";
import WebsiteStatusTextBody from "./WebsiteStatusTextBody";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <PageMarginsNew pageMarginsWidth="2" isScrollable={true}>
      <div className="pb-6">
        <TextBox
          textBoxTitle={t("home-page.welcome.title")}
          textBoxContent={<WelcomeTextBody />}
        />
      </div>
      <div className="pb-6">
        <TextBox
          textBoxTitle={t("home-page.status.title")}
          textBoxContent={<WebsiteStatusTextBody />}
        />
      </div>
    </PageMarginsNew>
  );
};

export default HomePage;
