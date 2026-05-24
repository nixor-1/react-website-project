import { ComponentOrientation } from "@react-project/shared/components";
import Icon from "../../components/Icon";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import List from "../../components/List";
import { useTranslation } from "react-i18next";

interface TranslatedListItem {
  listItemLabel: string;
  listItemBody: string;
}

const WorkExperienceBody = () => {
  const { t } = useTranslation();

  const kintellaItems = t("about-page.work-experience.kintella.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  const netcompanyItems = t("about-page.work-experience.netcompany.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-title-secondary">
          {t("about-page.work-experience.kintella.role")}
        </h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>{t("about-page.work-experience.kintella.company")}</p>
        </div>
      </div>

      <List listItems={kintellaItems} />

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />
      <div className="flex flex-col">
        <h2 className="text-title-secondary">
          {t("about-page.work-experience.netcompany.role")}
        </h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>{t("about-page.work-experience.netcompany.company")}</p>
        </div>
      </div>

      <List listItems={netcompanyItems} />
    </div>
  );
};

export default WorkExperienceBody;
