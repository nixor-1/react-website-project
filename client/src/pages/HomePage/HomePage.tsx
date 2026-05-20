import { useTranslation } from "react-i18next";
import PageMargins from "../../components/PageMargins";
import TextBox from "../../components/TextBox";
import Image from "../../components/Image";
import portraitImg from "../../assets/portrait-photo-transparent-bg.png";
import ContactInfoTextBody from "../ProfilePage/ContactInfo";
import { useLayoutEffect, useRef, useState } from "react";

const HomePage = () => {
  const [height, setHeight] = useState<number>(0);
  const textBoxRef = useRef<HTMLDivElement>(null);

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
    <div className="p-4 w-full">
      <div className="flex flex-row gap-4 items-start">

        {/* IMAGE CONTAINER */}
        <div
          style={{
            height: height > 0 ? `${height}px` : 'auto',
            aspectRatio: 'auto' // Ensures natural proportions
          }}
          className="flex-none" // Prevents the container from shrinking or growing
        >
          <Image
            src={portraitImg}
            alt="Portrait"
          // Note: Remove 'w-full' from your Image component 
          // if it interferes with 'w-auto'
          />
        </div>

        {/* TEXTBOX CONTAINER */}
        <div className="flex-grow min-w-0" ref={textBoxRef}>
          <TextBox
            textBoxTitle="test"
            textBoxContent={<ContactInfoTextBody />}
            iconName='contact'
          />
        </div>

      </div>
    </div>
  );
};


// <PageMargins pageMarginsWidth="large">
//   <TextBox textBoxTitle={t('home-page.welcome-text-header')} textBoxContent={t('home-page.welcome-text-body')} />
// </PageMargins>




export default HomePage;
