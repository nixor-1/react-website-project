import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const EnvironmentsTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'Visual Studio Code',
        'NeoVim',
        'IntelliJ',
        'Android Studio',
        'Overleaf',
        'Matlab',
        'Maple',
        'Maple'
      ]}
    />

  )
}

export default EnvironmentsTextBody;
