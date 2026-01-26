import { PropsWithChildren } from 'react';

interface LinkProps {
  href: string;
  className?: string;
}

const Link = ({
  href,
  className,
  children
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default Link;
