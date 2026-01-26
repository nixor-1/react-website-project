import Icon from "../Icon";
import { TextBoxProps } from "./TextBox.types";

const TextBox = ({
  textBoxTitle,
  textBoxContent,
  iconName
}: TextBoxProps) => {
  return (
    <section className="p-4 border-width-secondary border-color-primary rounded-rounding-primary bg-bg-color-primary">
      <div className="flex flex-row items-center gap-2">
        {iconName && <Icon iconName={iconName} />}
        {textBoxTitle && <h2 className="text-2xl text-title">{textBoxTitle}</h2>}
      </div>
      <div className="text-color-primary whitespace-pre-wrap leading-relaxed">
        {textBoxContent}
      </div>
    </section >
  )
}

export default TextBox;
