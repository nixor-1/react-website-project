import { ComponentOrientation } from "@react-project/shared/components";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";

interface PassionItem {
  title: string;
  "text-body": string;
}

const PassionsAndHobbiesTextBody = () => {
  const { t } = useTranslation();

  const passions = t("about-page.passions-and-hobbies.items", {
    returnObjects: true,
  }) as PassionItem[];

  return (
    <div className="flex flex-col">
      {passions.map((passion, index) => (
        <Fragment key={index}>
          <div className="flex flex-col">
            <h2 className="text-title-secondary">{passion.title}</h2>
            <p>{passion["text-body"]}</p>
          </div>

          {index < passions.length - 1 && (
            <SeparatorLine
              orientation={ComponentOrientation.HORIZONTAL}
              type={SeparatorLineType.Dotted}
              className="my-4"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default PassionsAndHobbiesTextBody;
