import { BlockTextProps } from "./BlockText.types";

const BlockText = ({ textElems }: BlockTextProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {textElems.map((textElem, index) => (
        <span
          key={index}
          className="border-width-secondary border-color-primary rounded-rounding-primary bg-bg-color-primary px-2"
        >
          {textElem}
        </span>
      ))}
    </div>
  );
};

export default BlockText;
