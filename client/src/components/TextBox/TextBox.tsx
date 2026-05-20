import Icon from "../Icon";
import { TextBoxProps } from "./TextBox.types";

const TextBox = ({
  textBoxTitle,
  textBoxContent,
  iconName
}: TextBoxProps) => {
  return (
    <section className="border-width-secondary border-color-primary rounded-rounding-primary bg-bg-color-primary overflow-hidden">
      <div className="flex flex-row items-center gap-2 bg-accent-color-primary p-4 border-b">
        {iconName && <Icon iconName={iconName} />}
        {textBoxTitle && <h1 className="text-title-primary">{textBoxTitle}</h1>}
      </div>
      <div className="text-color-primary whitespace-pre-wrap leading-relaxed p-4">
        {textBoxContent}
      </div>
    </section >
  )
}

export default TextBox;
