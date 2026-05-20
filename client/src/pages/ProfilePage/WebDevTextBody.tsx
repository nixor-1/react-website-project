import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const WebDevTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'React',
        'Vite',
        'GraphQL',
        'Firebase Cloud Messaging',
        'Redux',
        'Redux Toolkit',
        'RabbitMQ',
        'HTML',
        'CSS'
      ]}
    />

  )
}

export default WebDevTextBody;
