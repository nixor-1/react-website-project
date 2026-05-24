import React, { ReactNode, useRef } from "react";
import Btn, { BtnProps } from "../../components/Btn";
import BtnBar from "../../components/BtnBar";
import TextBox from "../../components/TextBox";
import PageMargins from "../../components/PageMargins";
import WorkExperienceBody from "./WorkExperienceTextBody";
import ProfileBody from "./ProfileTextBody";
import EducationTextBody from "./EducationTextBody";
import ProjectsTextBody from "./ProjectsTextBody";
import PassionsAndHobbiesTextBody from "./PassionsAndHobbiesTextBody";
import { useTranslation, Trans } from "react-i18next";
import { ComponentOrientation } from "@react-project/shared/components";
import Image from "../../components/Image";
import portraitImg from "../../assets/portrait-photo-transparent-bg.png";
import ContactInfoTextBody from "./ContactInfo";
import LangInfoTextBody from "./LanguageInfo";
import ProgrammingLangsTextBody from "./ProgrammingLangsTextBody";
import WebDevTextBody from "./WebDevTextBody";
import EnvironmentsTextBody from "./EnvironmentsTextBody";
import DevelopmentToolsTextBody from "./DevelopmentToolsTextBody";
import AiAndMachineLearningTextBody from "./AiAndMachineLearningTextBody";
import DatabaseSystemsTextBody from "./DatabaseSystemsTextBody";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";

const ScrollPage = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const profilePageSegmentsBtns: BtnProps[] = [
    {
      iconName: "user",
      btnText: t("about-page.profile.profile-title"),
      onClick: () => scrollToSection("profile"),
    },
    {
      iconName: "business",
      btnText: t("about-page.work-experience.title"),
      onClick: () => scrollToSection("work-experience"),
    },
    {
      iconName: "education",
      btnText: t("about-page.education.title"),
      onClick: () => scrollToSection("education"),
    },
    {
      iconName: "projects",
      btnText: t("about-page.projects.title"),
      onClick: () => scrollToSection("projects"),
    },
    {
      iconName: "flame",
      btnText: t("about-page.passions-and-hobbies.title"),
      onClick: () => scrollToSection("passions-and-hobbies"),
    },
  ];

  return (
    <PageMarginsNew
      pageMarginsWidth="2"
      isScrollable={true}
      leftCol={
        <BtnBar
          orientation={ComponentOrientation.VERTICAL}
          btnConfigs={profilePageSegmentsBtns}
        />
      }
      rightCol={
        <BtnBar
          orientation={ComponentOrientation.VERTICAL}
          btnConfigs={profilePageSegmentsBtns}
        />
      }
    >
      <div id="profile" className="flex flex-row gap-6 pb-6">
        <Image
          src={portraitImg}
          height={254}
          alt="Portrait photo of the owner of the website (Nick Jørgensen)."
        />
        <TextBox
          textBoxTitle={t("about-page.profile.profile-title")}
          textBoxContent={<ProfileBody />}
          iconName="user"
        />
      </div>

      <div className="pb-6">
        <TextBox
          textBoxTitle={t("about-page.pdf-document.title")}
          iconName="user"
          textBoxContent={
            <p className="text-color-primary">
              <Trans
                i18nKey="about-page.pdf-document.text-body"
                components={[
                  <Btn
                    href="/cv-engelsk.pdf"
                    download="Nick_Jorgensen_Resume.pdf"
                  >
                    {""}
                  </Btn>,
                  <Btn
                    href="/cv-engelsk.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {""}
                  </Btn>,
                ]}
              />
            </p>
          }
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <div id="work-experience">
            <TextBox
              textBoxTitle={t("about-page.work-experience.title")}
              textBoxContent={<WorkExperienceBody />}
              iconName="business"
            />
          </div>

          <div id="education">
            <TextBox
              textBoxTitle={t("about-page.education.title")}
              textBoxContent={<EducationTextBody />}
              iconName="education"
            />
          </div>

          <div id="projects">
            <TextBox
              textBoxTitle={t("about-page.projects.title")}
              textBoxContent={<ProjectsTextBody />}
              iconName="projects"
            />
          </div>

          <div id="passions-and-hobbies">
            <TextBox
              textBoxTitle={t("about-page.passions-and-hobbies.title")}
              textBoxContent={<PassionsAndHobbiesTextBody />}
              iconName="flame"
            />
          </div>
        </div>

        <aside className="col-span-1 flex flex-col gap-6">
          <TextBox
            textBoxTitle={t("about-page.contact-info.contact-info-title")}
            textBoxContent={<ContactInfoTextBody />}
            iconName="contact"
          />

          <TextBox
            textBoxTitle={t("about-page.lang.lang-title")}
            textBoxContent={<LangInfoTextBody />}
            iconName="earth"
          />

          <TextBox
            textBoxTitle={t(
              "about-page.programming-langs.programming-langs-title",
            )}
            textBoxContent={<ProgrammingLangsTextBody />}
            iconName="binary"
          />

          <TextBox
            textBoxTitle={t("about-page.environments.environments-title")}
            textBoxContent={<EnvironmentsTextBody />}
            iconName="environments"
          />

          <TextBox
            textBoxTitle={t("about-page.dev-tools.dev-tools-title")}
            textBoxContent={<DevelopmentToolsTextBody />}
            iconName="wrench"
          />

          <TextBox
            textBoxTitle={t(
              "about-page.ai-and-machine-learning.ai-and-machine-learning-title",
            )}
            textBoxContent={<AiAndMachineLearningTextBody />}
            iconName="bot"
          />

          <TextBox
            textBoxTitle={t(
              "about-page.database-systems.database-systems-title",
            )}
            textBoxContent={<DatabaseSystemsTextBody />}
            iconName="database"
          />
        </aside>
      </div>
    </PageMarginsNew>
  );
};

export default ScrollPage;
