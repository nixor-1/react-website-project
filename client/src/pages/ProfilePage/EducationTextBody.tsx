import { ComponentOrientation } from "@react-project/shared/components";
import Icon from "../../components/Icon";
import List from "../../components/List";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import { useTranslation } from "react-i18next";

interface TranslatedListItem {
  listItemLabel: string;
  listItemBody: string;
}

const EducationTextBody = () => {
  const { t } = useTranslation();

  const dtuBachelorItems = t("about-page.education.dtu-bachelor.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  const dtuMasterItems = t("about-page.education.dtu-master.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  const epflBachelorItems = t("about-page.education.epfl-bachelor.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-title-secondary">
          Computer science and engineering
        </h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>Technical University of Denmark (DTU)</p>
        </div>
      </div>

      <List listItems={dtuMasterItems} />

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <div className="flex flex-col">
        <h2 className="text-title-secondary">BSc | Software technology</h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>Technical University of Denmark (DTU)</p>
        </div>
      </div>

      <List listItems={dtuBachelorItems} />

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <div className="flex flex-col">
        <h2 className="text-title-secondary">BSc | Study exchange</h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>Swiss Federal Institute of Technology in Lausanne (EPFL)</p>
        </div>
      </div>

      <List listItems={epflBachelorItems} />
    </div>
  );
};

export default EducationTextBody;
