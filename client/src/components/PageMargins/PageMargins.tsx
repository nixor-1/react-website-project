import { PropsWithChildren } from "react";
import { PageMarginsProps } from "./PageMargins.types";

const marginsWidthMap = {
  small: 'px-6',
  medium: 'px-20',
  large: 'px-66'
};

const PageMargins = ({
  className,
  pageMarginsWidth,
  isScrollable = false,
  children
}: PropsWithChildren<PageMarginsProps>) => {
  const paddingClass = marginsWidthMap[pageMarginsWidth as keyof typeof marginsWidthMap] || '';

  return (
    <main className={`py-6 h-full ${paddingClass} ${className ? className : ''}`}>
      {children}
    </main>
  )
}

export default PageMargins;
