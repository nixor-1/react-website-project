import { ComponentOrientation } from "@react-project/shared/components";
import Icon from "../../components/Icon";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";
import Callout from "../../components/Callout";
import List from "../../components/List";

const WorkExperienceBody = () => {
  return (
    <div className="flex flex-col">
      <Callout
        title={
          <div className="flex flex-col">
            <h2 className="text-title-secondary">Full stack developer</h2>
            <div className="flex flex-row items-center gap-2">
              <Icon iconName='location' />
              <p>Kintella</p>
            </div>
          </div>
        }
        type="info"
      >
        <List
          listItems={[
            { listItemLabel: 'Frontend architecture', listItemBody: 'Implemented efficient and organized code with software patterns for optimal user 0' },
            { listItemLabel: 'System integrations', listItemBody: 'Implemented integrations with existing health platforms.' },
            { listItemLabel: 'Notifications', listItemBody: 'Implemented a cross-platform notifications with Firebase Cloud Messaging.' },
            { listItemLabel: 'GraphQL architecture', listItemBody: 'Designed and implemented the GraphQL API layer, schemas, efficient server-side resolvers, and optimized client-side queries for performance.' }
          ]}
        />
      </Callout>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <Callout
        title={
          <div className="flex flex-col">
            <h2 className="text-title-secondary">Frontend developer</h2>
            <div className="flex flex-row items-center gap-2">
              <Icon iconName='location' />
              <p>Netcompany</p>
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

export default WorkExperienceBody;
