import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const DatabaseSystemsTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'MySQL',
        'PostgreSQL',
        'Prisma',
        'Redis'
      ]}
    />

  )
}

export default DatabaseSystemsTextBody;
