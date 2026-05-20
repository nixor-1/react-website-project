import { useTranslation } from "react-i18next";
import BlockText from "../../components/BlockText";

const AiAndMachineLearningTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <BlockText
      textElems={[
        'PyTorch',
        'Logic tensor networks',
        'PettingZoo',
        'Gymnasium',
        'Scikit-learn',
        'NumPy',
        'Pandas',
        'WandB'
      ]}
    />

  )
}

export default AiAndMachineLearningTextBody;
