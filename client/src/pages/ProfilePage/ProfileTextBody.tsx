import { useTranslation } from "react-i18next";

const ProfileBody = () => {
  const { t, i18n } = useTranslation();

  return <p>{t("about-page.profile.profile-text-body")}</p>;
};

export default ProfileBody;
