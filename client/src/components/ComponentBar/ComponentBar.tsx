import { ComponentOrientation } from "@react-project/shared/components";
import { ComponentBarProps } from "./ComponentBar.types";
import { Fragment } from "react/jsx-runtime";

const ComponentBar = ({
  orientation,
  color,
  sepBar = false,
  components
}: ComponentBarProps) => {
  const isHorizontal = orientation === ComponentOrientation.HORIZONTAL;

  const outerClasses = `
    flex
    ${sepBar ? 'bg-color-primary' : ''} 
    ${sepBar && isHorizontal ? 'pb-[1px]' : ''} 
    ${sepBar && !isHorizontal ? 'pr-[1px]' : ''}
    ${isHorizontal ? 'w-full h-fit' : 'h-full w-fit'}
  `;

  const innerClasses = `
    flex p-4 gap-4 w-full h-full
    ${color || 'bg-accent-color-primary'}
    ${isHorizontal ? 'flex-row' : 'flex-col'}
  `;

  return (
    <div className={outerClasses}>
      <div className={innerClasses}>
        {components.map((component, index) => (
          <Fragment key={index}>{component}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default ComponentBar;
