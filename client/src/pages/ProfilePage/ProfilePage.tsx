import React, { ReactNode, useRef } from 'react';
import Btn, { BtnProps } from '../../components/Btn';
import BtnBar from '../../components/BtnBar';
import TextBox from '../../components/TextBox';
import PageMargins from '../../components/PageMargins';
import WorkExperienceBody from './WorkExperienceTextBody';
import ProfileBody from './ProfileTextBody';
import EducationTextBody from './EducationTextBody';
import PassionsAndHobbiesTextBody from './PassionsAndHobbiesTextBody';
import { useTranslation } from 'react-i18next';
import { ComponentOrientation } from '@react-project/shared/components';

interface Segment {
  id: string;
  title: string;
  content: ReactNode;
  iconName?: string;
}

const segments: Segment[] = [
  { id: 'profile', iconName: 'user', title: 'Profile', content: <ProfileBody /> },
  { id: 'work-experience', iconName: 'business', title: 'Work experience', content: <WorkExperienceBody /> },
  { id: 'education', iconName: 'education', title: 'Education', content: <EducationTextBody /> },
  { id: 'passions-and-hobbies', iconName: 'flame', title: 'Passions and hobbies', content: <PassionsAndHobbiesTextBody /> },
];

const ScrollPage = () => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const profilePageSegmentsBtns: BtnProps[] = [
    {
      iconName: 'user',
      btnText: t('about-page.profile'),
      onClick: () => scrollToSection('profile'),
    },
    {
      iconName: 'business',
      btnText: t('about-page.work-experience'),
      onClick: () => scrollToSection('work-experience'),
    },
    {
      iconName: 'education',
      btnText: t('about-page.education'),
      onClick: () => scrollToSection('education'),
    },
    {
      iconName: 'flame',
      btnText: t('about-page.passions-and-hobbies'),
      onClick: () => scrollToSection('passions-and-hobbies'),
    },
  ];

  return (
    <div className="h-full grid grid-cols-[auto_1fr] overflow-hidden">
      <aside className="h-full">
        <BtnBar
          orientation={ComponentOrientation.VERTICAL}
          btnConfigs={profilePageSegmentsBtns}
        />
      </aside>
      <PageMargins className="overflow-auto flex flex-col gap-6" pageMarginsWidth="large">
        {segments.map((s) => (
          <div key={s.id} id={s.id}>
            <TextBox textBoxTitle={s.title} textBoxContent={s.content} iconName={s.iconName} />
          </div>
        ))}
      </PageMargins>
    </div>
  );
};

export default ScrollPage;
