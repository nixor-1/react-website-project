import { ComponentOrientation } from "@react-project/shared/components";
import { StatusBarProps } from "./StatusBar.types";

const StatusBar = ({
  statusBarText,
  orientation
}: StatusBarProps) => {
  return (
    <div className={`p-4 gap-4 flex items-center ${orientation === ComponentOrientation.HORIZONTAL ? 'flex-row w-full h-10' : 'flex-col h-full w-10'}`} >
      {statusBarText}
    </div >
  );
}

export default StatusBar;
