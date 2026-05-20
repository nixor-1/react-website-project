import { ComponentOrientation } from "@react-project/shared/components";
import { SeparatorlineProps, SeparatorLineType } from "./SeparatorLine.types";

const SeparatorLine = ({
  orientation,
  type,
  className
}: SeparatorlineProps) => {
  const orientationClasses = orientation === ComponentOrientation.HORIZONTAL ? 'w-full h-2' : 'h-full w-2';
  const thickness = 2;
  const dashStyles: Record<SeparatorLineType, string> = {
    "SOLID": "",
    "DASHED": "8, 4",
    "DOTTED": `0.1, ${thickness * 2}`,
  };

  return (
    <svg
      width="100%"
      height={thickness}
      className={`${className} overflow-visible`}
    >
      <line
        x1="0"
        y1={thickness / 2}
        x2="100%"
        y2={thickness / 2}
        stroke={'black'}
        strokeWidth={thickness}
        strokeDasharray={dashStyles[type]}
        strokeLinecap={'round'}
      />
    </svg>
  );
}

export default SeparatorLine;
