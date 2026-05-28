import { PropsWithChildren, useEffect, useState } from "react";
import { PageMarginsProps } from "./PageMargins.types";

const PageMarginsNew = ({
  className,
  leftCol,
  rightCol,
  isScrollable = false,
  children,
}: PropsWithChildren<PageMarginsProps>) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // Get scrollbar width on mount
  useEffect(() => {
    const getScrollbarWidth = () => {
      // Create a temporary div to measure scrollbar width
      const div = document.createElement("div");
      div.style.visibility = "hidden";
      div.style.overflow = "scroll";
      div.style.width = "100px";
      div.style.height = "100px";
      document.body.appendChild(div);

      const scrollbarWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);

      return scrollbarWidth;
    };

    setScrollbarWidth(getScrollbarWidth());

    // Update on resize
    const handleResize = () => {
      setScrollbarWidth(getScrollbarWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollStyles = isScrollable
    ? "overflow-y-auto overflow-x-hidden"
    : "overflow-hidden";

  // Shifts from a single-column layout to a layout consisting of three side-by-side columns.
  const mainGridStyles =
    "grid grid-cols-1 md:grid-cols-[1fr_minmax(0,910px)_1fr] h-full w-full";

  const middleColumnStyles = `w-full ${
    isScrollable ? "h-fit" : "h-full overflow-hidden"
  } pt-0 pb-6 md:py-6 md:px-0 md:col-start-2`;

  // Hides/removes sidebars on smaller screens. They are fixed on larger screens.
  const sidebarStyles = "hidden md:block md:fixed md:h-full";

  return (
    <main
      className={`${mainGridStyles} ${scrollStyles} ${className ?? ""}`}
      style={
        isScrollable
          ? ({
              "--scrollbar-offset": `${scrollbarWidth}px`,
            } as React.CSSProperties)
          : {}
      }
    >
      {/* Left column — fixed to the left side */}
      <aside
        className={`${sidebarStyles} md:left-0`}
        style={
          isScrollable
            ? { right: `calc(100vw - var(--scrollbar-offset, 0px))` }
            : {}
        }
      >
        {leftCol}
      </aside>

      {/* Middle column — positioned in the grid */}
      <div className={middleColumnStyles}>{children}</div>

      {/* Right column - fixed to the right side with scrollbar adjustment */}
      <aside
        className={`${sidebarStyles}`}
        style={
          isScrollable
            ? { right: `var(--scrollbar-offset, 0px)` }
            : { right: 0 }
        }
      >
        {rightCol}
      </aside>
    </main>
  );
};

export default PageMarginsNew;
