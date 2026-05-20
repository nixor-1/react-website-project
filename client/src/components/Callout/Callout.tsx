import { ReactNode } from "react";

interface ToggleCalloutProps {
  title: ReactNode;
  children: ReactNode;
  type?: "info" | "warning";
}

const Callout = ({ title, children, type = "info" }: ToggleCalloutProps) => {
  const styles = {
    info: "border-blue-500 bg-blue-50/30",
    warning: "border-amber-500 bg-amber-50/30",
  };

  return (
    <details className={`group border-l-4 rounded-r-md transition-all duration-300 ${styles[type]} [&_summary::-webkit-details-marker]:hidden`}>
      <summary className="flex cursor-pointer list-none items-center justify-between p-4 outline-none select-none">
        {title}
        <span className="transition-transform duration-300 group-open:rotate-180" aria-hidden="true">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-sm leading-relaxed opacity-90">
            {children}
          </div>
        </div>
      </div>
    </details>
  );
};

export default Callout;
