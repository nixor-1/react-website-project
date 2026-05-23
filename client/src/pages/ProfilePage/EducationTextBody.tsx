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

  const dtuBachelorItems = t("about-page.work-experience.kintella.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  const dtuMasterItems = t("about-page.work-experience.netcompany.items", {
    returnObjects: true,
  }) as TranslatedListItem[];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-title-secondary">
          MSc | Computer science and engineering
        </h2>
        <div className="flex flex-row items-center gap-2">
          <Icon iconName="location" />
          <p>Technical University of Denmark (DTU)</p>
        </div>
      </div>
      <List
        listItems={[
          {
            listItemLabel: "Data and network security",
            listItemBody:
              "Learned a great deal about data security as well as how these concepts are used to protect data in networks. Examples of this involve encryption, network protocols, the OSI data model.",
          },
          {
            listItemLabel: "Artificial intelligence",
            listItemBody:
              "Took many courses in artificial intelligence and completed my master's degree with a project centered on reinforcement learning. Learned about deep learning, neural networks, machine learning, Bayesian machine learning, computer vision, and more.",
          },
          {
            listItemLabel: "Master's thesis",
            listItemBody:
              "Learned to work almost completely unsupervised and autonomously for a complete semester under the supervision of Nina Gierasimczuk, an associate professor at DTU. Implemented and augmented a reinforcement learning algorithm with logic tensor networks. For more information, refer to the projects section.",
          },
        ]}
      />

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
      <List
        listItems={[
          {
            listItemLabel: "Programming",
            listItemBody:
              "Learned to program in various languages (e.g., Java, C, and F#). Also learned a great deal about object-oriented and functional Programming.",
          },
          {
            listItemLabel: "Software tools",
            listItemBody:
              "Learned about varius essential software tools such as Git, GitHub, code editors, and IDEs.",
          },
          {
            listItemLabel: "Computer architecture",
            listItemBody:
              "Learned about CPUs, compilers, assembly, machine code instructions, and how computers work at the fundamental level.",
          },
          {
            listItemLabel: "Collaborative projects",
            listItemBody:
              "Worked in many projects, most of them involving programming, and learned to efficiently collaborate with others using software tools.",
          },
          {
            listItemLabel: "Algorithms and data structures",
            listItemBody:
              "Learned about essential algorithms and data structures, as well as how to analyze them.",
          },
        ]}
      />

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
      <List
        listItems={[
          {
            listItemLabel: "High-performance computing systems",
            listItemBody:
              "Learned about the achitecture and security of high-performance computing systems",
          },
          {
            listItemLabel: "Cultural flexibility",
            listItemBody:
              "Learned about and adapted to cultural differences across national border, both inside and outside the university.",
          },
        ]}
      />
    </div>
  );
};

export default EducationTextBody;
