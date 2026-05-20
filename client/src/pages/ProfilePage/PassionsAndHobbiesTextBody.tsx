import { ComponentOrientation } from "@react-project/shared/components";
import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";

const PassionsAndHobbiesTextBody = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-title-secondary">Bodybuilding</h2>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Running</h2>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Notetaking</h2>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Artificial intelligence</h2>
    </div>
  )
}

export default PassionsAndHobbiesTextBody;
