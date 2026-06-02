import Icon from "../Icon";
import { TextBoxProps } from "./TextBox.types";

const TextBox = ({
  textBoxTitle,
  textBoxContent,
  iconName,
  className,
}: TextBoxProps) => {
  const isRichContent = typeof textBoxContent !== "string";

  // Applies outer border on larger screens, disabling them on smaller ones.
  const containerBorderStyles =
    "border-0 rounded-none md:border md:border-color-primary md:rounded-rounding-primary md:border-width-secondary";

  return (
    <section
      className={`flex flex-col ${containerBorderStyles} ${
        className ? className : ""
      } bg-bg-color-primary overflow-hidden`}
    >
      {(iconName || textBoxTitle) && (
        <div className="flex flex-row items-center gap-2 bg-accent-color-primary p-4 border-b border-color-primary">
          {iconName && <Icon iconName={iconName} />}
          {textBoxTitle && (
            <h1 className="text-title-primary">{textBoxTitle}</h1>
          )}
        </div>
      )}

      <div
        className={`text-color-primary leading-relaxed p-4 flex-1 min-h-0 overflow-y-auto ${
          isRichContent ? "whitespace-normal" : "whitespace-pre-wrap"
        }`}
      >
        {textBoxContent}
      </div>
    </section>
  );
};

export default TextBox;
