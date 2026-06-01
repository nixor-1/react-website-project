import React, {
  Children,
  isValidElement,
  useState,
  useRef,
  useEffect,
} from "react";
import { ComponentOrientation } from "@react-project/shared/components";
import {
  ComponentBarProps,
  ComponentBarGroupProps,
} from "./ComponentBar.types";

const ComponentBarGroup = ({
  alignment = "left",
  children,
  forceMobileLayout = false,
}: ComponentBarGroupProps) => {
  const groupClasses = forceMobileLayout
    ? "contents"
    : `contents md:flex md:flex-row md:flex-nowrap md:items-center md:gap-4 ${
        alignment === "right" ? "md:ml-auto" : ""
      }`;

  return (
    <div className={groupClasses}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        return <div className="flex-shrink-0 snap-content-center">{child}</div>;
      })}
    </div>
  );
};

const ComponentBar = ({
  orientation,
  color,
  sepBar = false,
  children,
}: ComponentBarProps) => {
  const isHorizontal = orientation === ComponentOrientation.HORIZONTAL;

  const [forceMobileLayout, setForceMobileLayout] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const measuringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHorizontal) return;

    const observer = new ResizeObserver(() => {
      if (containerRef.current && measuringRef.current) {
        const availableWidth = containerRef.current.offsetWidth;

        const requiredWidth = measuringRef.current.scrollWidth;

        if (requiredWidth >= availableWidth) {
          setForceMobileLayout(true);
        } else {
          setForceMobileLayout(false);
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isHorizontal, children]);

  const outerClasses = `
    relative flex w-full min-w-0
    ${sepBar ? "bg-color-primary" : ""} 
    ${sepBar && isHorizontal ? "pb-[1px]" : ""} 
    ${sepBar && !isHorizontal ? "pr-[1px]" : ""}
    ${isHorizontal ? "h-fit" : "h-full w-fit"}
  `;

  const innerClasses = `
    flex flex-nowrap items-center p-4 gap-4 w-full h-full
    overflow-x-auto scrollbar-none snap-x snap-mandatory
    ${color || "bg-accent-color-primary"}
    ${isHorizontal && !forceMobileLayout ? "flex-row md:flex-row" : "flex-row"}
    ${!isHorizontal ? "flex-col md:flex-col" : ""}
  `;

  return (
    <div className={outerClasses} ref={containerRef}>
      <div className={innerClasses}>
        {Children.map(children, (child) => {
          if (isValidElement(child) && child.type === ComponentBarGroup) {
            return React.cloneElement(child, { forceMobileLayout } as any);
          }
          return child;
        })}
      </div>

      {/* A hidden element used to provide the exact pixel width required to render all items without wrapping or compression. */}
      {isHorizontal && (
        <div
          ref={measuringRef}
          className="absolute opacity-0 pointer-events-none invisible top-0 left-0 flex flex-row flex-nowrap gap-4 p-4"
        >
          {Children.map(children, (group) => {
            if (isValidElement(group) && group.props.children) {
              return group.props.children;
            }
            return group;
          })}
        </div>
      )}
    </div>
  );
};

ComponentBar.Group = ComponentBarGroup;

export default ComponentBar;
