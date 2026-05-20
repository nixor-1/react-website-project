import { useTranslation } from "react-i18next";
import TextBox from "../../components/TextBox";
import Image from "../../components/Image";
import portraitImg from "../../assets/portrait-photo-transparent-bg.png";
import { useLayoutEffect, useRef, useState } from "react";
import PageMarginsNew from '../../components/PageMargins/PageMarginsNew';
import ProfileBody from "../ProfilePage/ProfileTextBody";

const HomePage = () => {
  const [height, setHeight] = useState<number>(0);
  const textBoxRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    if (!textBoxRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // We sync the height of the TextBox to our state
        setHeight(entry.target.clientHeight);
      }
    });

    resizeObserver.observe(textBoxRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <PageMarginsNew
      pageMarginsWidth='2'
      isScrollable={true}
    >
      <div id="profile" className="flex flex-row gap-6 pb-6">
        <Image
          src={portraitImg}
          height={254}
          alt="Portrait photo of the owner of the website (Nick Jørgensen)."
        />
        <TextBox
          textBoxTitle={t('about-page.profile')}
          textBoxContent={
            <ProfileBody />
          }
          iconName='user'
        />
      </div>
    </PageMarginsNew>
  )

};


// <PageMargins pageMarginsWidth="large">
//   <TextBox textBoxTitle={t('home-page.welcome-text-header')} textBoxContent={t('home-page.welcome-text-body')} />
// </PageMargins>




export default HomePage;
