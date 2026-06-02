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

  const profileHeaderStyles =
    "flex flex-col items-center pt-6 md:flex-row md:items-start gap-6 pb-0 md:pt-0 md:pb-6";

  const mainGridStyles = "grid grid-cols-1 md:grid-cols-3 md:gap-6";

  const borderStyling = "border-b-2 border-color-primary";

  const cvSections = [
    {
      id: "work-experience",
      titleKey: "about-page.work-experience.title",
      icon: "business",
      content: <WorkExperienceBody />,
    },
    {
      id: "education",
      titleKey: "about-page.education.title",
      icon: "education",
      content: <EducationTextBody />,
    },
    {
      id: "projects",
      titleKey: "about-page.projects.title",
      icon: "projects",
      content: <ProjectsTextBody />,
    },
    {
      id: "passions-and-hobbies",
      titleKey: "about-page.passions-and-hobbies.title",
      icon: "flame",
      content: <PassionsAndHobbiesTextBody />,
    },
  ];

  const skillSections = [
    {
      titleKey: "about-page.contact-info.contact-info-title",
      icon: "contact",
      content: <ContactInfoTextBody />,
    },
    {
      titleKey: "about-page.lang.lang-title",
      icon: "earth",
      content: <LangInfoTextBody />,
    },
    {
      titleKey: "about-page.programming-langs.programming-langs-title",
      icon: "binary",
      content: <ProgrammingLangsTextBody />,
    },
    {
      titleKey: "about-page.environments.environments-title",
      icon: "environments",
      content: <EnvironmentsTextBody />,
    },
    {
      titleKey: "about-page.dev-tools.dev-tools-title",
      icon: "wrench",
      content: <DevelopmentToolsTextBody />,
    },
    {
      titleKey:
        "about-page.ai-and-machine-learning.ai-and-machine-learning-title",
      icon: "bot",
      content: <AiAndMachineLearningTextBody />,
    },
    {
      titleKey: "about-page.database-systems.database-systems-title",
      icon: "database",
      content: <DatabaseSystemsTextBody />,
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
      <div id="profile" className={profileHeaderStyles}>
        <Image
          src={portraitImg}
          height={254}
          alt="Portrait photo of the owner of the website (Nick Jørgensen)."
        />
        <TextBox
          className="border-t-2 border-b-2 border-color-primary md:grow md:h-[254px]"
          textBoxTitle={t("about-page.profile.profile-title")}
          textBoxContent={<ProfileBody />}
          iconName="user"
        />
      </div>

      <div className="md:pb-6">
        <TextBox
          className={`${borderStyling}`}
          textBoxTitle={t("about-page.pdf-document.title")}
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

      <div className={mainGridStyles}>
        <div className="col-span-2 flex flex-col md:gap-6">
          {cvSections.map((section) => (
            <div id={section.id} key={section.id}>
              <TextBox
                className={`${borderStyling}`}
                textBoxTitle={t(section.titleKey)}
                textBoxContent={section.content}
                iconName={section.icon}
              />
            </div>
          ))}
        </div>

        <aside className="col-span-1 flex flex-col md:gap-6">
          {skillSections.map((section, idx) => (
            <TextBox
              key={idx}
              className={`${borderStyling}`}
              textBoxTitle={t(section.titleKey)}
              textBoxContent={section.content}
              iconName={section.icon}
            />
          ))}
        </aside>
      </div>
    </PageMarginsNew>
  );
};

export default ScrollPage;
