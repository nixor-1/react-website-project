import { ComponentOrientation } from "@react-project/shared/components";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";

interface ProjectItem {
  title: string;
  "text-body": string;
}

const ProjectsTextBody = () => {
  const { t } = useTranslation();

  const projects = t("about-page.projects.items", {
    returnObjects: true,
  }) as ProjectItem[];

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <Fragment key={index}>
          <div className="flex flex-col">
            <h2 className="text-title-secondary">{project.title}</h2>
            <p>{project["text-body"]}</p>
          </div>

          {index < projects.length - 1 && (
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

export default ProjectsTextBody;
