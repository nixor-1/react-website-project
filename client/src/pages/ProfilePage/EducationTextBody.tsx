import { ComponentOrientation } from "@react-project/shared/components";
import Icon from "../../components/Icon";
import { ListItem } from "../../components/List";
import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import Callout from "../../components/Callout";

const EducationTextBody = () => {
  return (
    <div className="flex flex-col">
      <Callout
        title={
          <div className="flex flex-col">
            <h2 className="text-title-secondary">MSc | Computer science and engineering</h2>
            <div className="flex flex-row items-center gap-2">
              <Icon iconName='location' />
              <p>Technical University of Denmark (DTU)</p>
            </div>
          </div>
        }
        type="info"
      >
        En helvedes masse tekst om alt det jeg har lært på dette udvekslingsophold hihi haha lololol :)
      </Callout>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <Callout
        title={
          <div className="flex flex-col">
            <h2 className="text-title-secondary">BSc | Software technology</h2>
            <div className="flex flex-row items-center gap-2">
              <Icon iconName='location' />
              <p>Technical University of Denmark (DTU)</p>
            </div>
          </div>
        }
        type="info"
      >
        En helvedes masse tekst om alt det jeg har lært på dette udvekslingsophold hihi haha lololol :)
      </Callout>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <Callout
        title={
          <div className="flex flex-col">
            <h2 className="text-title-secondary">BSc | Study exchange</h2>
            <div className="flex flex-row items-center gap-2">
              <Icon iconName='location' />
              <p>Swiss Federal Institute of Technology in Lausanne (EPFL)</p>
            </div>
          </div>
        }
        type="info"
      >
        En helvedes masse tekst om alt det jeg har lært på dette udvekslingsophold hihi haha lololol :)
      </Callout>
    </div>
  )
}

export default EducationTextBody;
