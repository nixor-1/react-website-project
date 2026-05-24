import List from "../../components/List";
import { useTranslation } from "react-i18next";

interface StatusListItem {
  listItemLabel: string;
  listItemBody: string;
}

const WebsiteStatusTextBody = () => {
  const { t } = useTranslation();

  const statusItems = t("home-page.status.text-body.items", {
    returnObjects: true,
  }) as StatusListItem[];

  return (
    <>
      <p>{t("home-page.status.text-body.intro")}</p>

      <List listItems={statusItems} />
    </>
  );
};

export default WebsiteStatusTextBody;
