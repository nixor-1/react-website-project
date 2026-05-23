import { ComponentOrientation } from "@react-project/shared/components";
import Icon from "../../components/Icon";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import Callout from "../../components/Callout";
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
      {/* <Callout */}
      {/*   title={ */}

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

      {/* </Callout> */}
      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />
      {/* <Callout */}
      {/*   title={ */}
      <div className="flex flex-col">
        <h2 className="text-title-secondary">Frontend developer</h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>Netcompany</p>
        </div>
      </div>
      {/*   } */}
      {/*   type="info" */}
      {/* > */}
      <List
        listItems={[
          {
            listItemLabel: "Frontend development",
            listItemBody:
              "Built and maintained responsive user interfaces using React and TypeScript.",
          },
          {
            listItemLabel: "Workflow management",
            listItemBody:
              "Utilized Azure DevOps to track sprint progress, manage backlogs, and ensure timely delivery of assigned tasks.",
          },
        ]}
      />
      {/* </Callout> */}
    </div>
  );
};

export default WorkExperienceBody;
