import TextBox from "../../components/TextBox";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";
import WelcomeTextBody from "./WelcomeTextBody";
import WebsiteStatusTextBody from "./WebsiteStatusTextBody";

const HomePage = () => {
  return (
    <PageMarginsNew pageMarginsWidth="2" isScrollable={true}>
      <div className="pb-6">
        <TextBox
          textBoxTitle="Velkommen!"
          textBoxContent={<WelcomeTextBody />}
        />
      </div>
      <div className="pb-6">
        <TextBox
          textBoxTitle="Mangler, problemer og fremtidige features"
          textBoxContent={<WebsiteStatusTextBody />}
        />
      </div>
    </PageMarginsNew>
  );
};

export default HomePage;
