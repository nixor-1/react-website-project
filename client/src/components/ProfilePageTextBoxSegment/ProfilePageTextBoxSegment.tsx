import List from "../List";
import { ProfilePageTextBoxSegmentProps } from "./ProfilePageTextBoxSegment.types";

const ProfilePageTextBoxSegment = ({
  title,
  date,
  desc,
  list,
}: ProfilePageTextBoxSegmentProps) => {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-medium text-xl">{title}</h3>
        {date && <span className="ml-auto font-medium text-gray-600">{date}</span>}
      </div>
      {desc && <p className="mb-4">
        {desc}
      </p>}
      {list && <List listItems={list} />}
    </div>
  )
}

export default ProfilePageTextBoxSegment;
