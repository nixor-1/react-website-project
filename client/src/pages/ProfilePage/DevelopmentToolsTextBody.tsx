import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const DevelopmentToolsTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'Git',
        'GitHub',
        'GitLab',
        'Slack',
        'Teams',
        'Docker',
        'LaTeX',
        'SSH'
      ]}
    />

  )
}

export default DevelopmentToolsTextBody;
