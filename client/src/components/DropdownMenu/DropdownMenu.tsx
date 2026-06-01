import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Btn from "../Btn";
import { DropdownMenuProps } from "./DropdownMenu.types";
import { BtnProps } from "../Btn/Btn.types";

const DropdownMenu = ({
  dropdownMenuLabel,
  dropdownMenuIconName,
  dropdownMenuItems,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCoords({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    updatePosition();

    if (isOpen) {
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, { capture: true });
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, { capture: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        containerRef.current?.contains(target) ||
        portalRef.current?.contains(target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <Btn
        btnText={dropdownMenuLabel}
        iconName={dropdownMenuIconName}
        onClick={toggle}
        isToggled={isOpen}
      />

      {isOpen &&
        createPortal(
          <div
            ref={portalRef}
            className="absolute z-[9999] flex flex-col mt-1 gap-1"
            style={{
              position: "absolute",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              width: `${coords.width}px`,
            }}
          >
            {dropdownMenuItems.map((itemProps, index) => {
              const adjustedBtnProps = {
                ...itemProps,
                onClick: () => {
                  itemProps.onClick?.();
                  setIsOpen(false);
                },
              } as BtnProps;

              return <Btn key={index} {...adjustedBtnProps} />;
            })}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default DropdownMenu;
