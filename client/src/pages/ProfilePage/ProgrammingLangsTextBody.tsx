import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const ProgrammingLangsTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C',
        'C++',
        'F#',
        'R',
        'Prolog',
        'XML'
      ]}
    />

  )
}

export default ProgrammingLangsTextBody;
