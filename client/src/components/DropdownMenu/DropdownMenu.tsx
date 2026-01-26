import { useState, useRef, useEffect } from "react";
import Btn from "../Btn";
import { DropdownMenuProps } from "./DropdownMenu.types";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownMenu = ({
  dropdownMenuLabel,
  dropdownMenuIconName,
  dropdownMenuItems,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const navRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div
      className="relative "
      ref={navRef}
    >
      <Btn
        btnText={dropdownMenuLabel}
        iconName={dropdownMenuIconName}
        onClick={toggle}
        isToggled={isOpen}
      />
      {isOpen && (
        <div className="w-full absolute z-100 flex flex-col mt-1 gap-1">
          {dropdownMenuItems.map((itemProps, index) => {
            const { href, onClick, ...rest } = itemProps;

            if (href) {
              return (
                <Btn
                  key={index}
                  href={href}
                  {...rest}
                />
              );
            }

            return (
              <Btn
                key={index}
                {...rest}
                onClick={() => {
                  onClick?.();
                  setIsOpen(false);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
