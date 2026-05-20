import { ComponentOrientation } from "@react-project/shared/components";
import { IndicatorBarProps } from "./IndicatorBar.types";

const IndicatorBar = ({ lvl, maxLvl, orientation }: IndicatorBarProps) => {
  const isVertical = orientation === ComponentOrientation.VERTICAL;
  const percentage = (lvl / maxLvl) * 100;

  return (
    <div className={`bg-gray-300 rounded-full overflow-hidden ${isVertical ? "w-2 h-20" : "w-full min-w-[100px] h-2"}`}>
      <div
        className="bg-color-primary h-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default IndicatorBar;
