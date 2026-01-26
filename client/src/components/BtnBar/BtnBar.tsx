import { BtnBarProps } from './BtnBar.types';
import Btn from '../Btn/Btn';
import { ComponentOrientation } from '@react-project/shared/components';

const BtnBar = ({
  orientation,
  btnConfigs,
  color
}: BtnBarProps) => {
  return (
    <div className={`${color ? color : ''} p-4 gap-4 flex ${orientation === ComponentOrientation.HORIZONTAL ? 'flex-row w-full h-16' : 'flex-col h-full w-16'}`} >
      {btnConfigs.map((btnConfig, index) => (
        <Btn key={index} {...btnConfig} rotatedText={orientation === ComponentOrientation.VERTICAL} />
      ))}
    </div >
  );
};

export default BtnBar;
