import Icon from "../Icon";
import { BtnProps, BtnVariant } from "./Btn.types";
import Link from "../Link";

const Btn = ({
  disabled = false,
  btnText,
  variant = BtnVariant.PRIMARY,
  className = "",
  iconName,
  rotatedText = false,
  isToggled = false,
  hasShadow = true,
  children,
  ...props
}: BtnProps) => {

  const renderContent = () => {
    if (children) return children;
    return (
      <div className={`flex ${rotatedText ? 'flex-col items-center justify-center gap-1' : 'flex-row items-center justify-center gap-1'}`}>
        {iconName && <Icon iconName={iconName} />}
        {btnText && (
          <span className={`text-color-primary ${rotatedText ? '[writing-mode:vertical-lr]' : ''}`}>
            {btnText}
          </span>
        )}
      </div>
    );
  };

  const commonClasses = `
    ${className} 
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} 
    ${isToggled ? 'bg-gray-200' : 'bg-bg-color-primary'} 
    ${rotatedText ? 'py-2 px-1' : 'py-1 px-2'}
    ${hasShadow ? 'shadow' : ''}
    hover:bg-gray-100 font-semibold text-base border border-color-primary border-width-primary rounded-rounding-primary shadow 
    inline-block text-center no-underline text-color-primary bg-topo-pattern
  `.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={commonClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      onClick={"onClick" in props ? props.onClick : undefined}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};

export default Btn;
