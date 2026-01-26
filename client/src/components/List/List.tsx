import { ListProps } from "./List.types";

const List = ({
  listItems
}: ListProps) => {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      {listItems.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item.listItemLabel && <strong className="font-bold text-color-primary">{item.listItemLabel}: </strong>}
          <span className="text-color-primary">{item.listItemBody}</span>
        </li>
      ))}
    </ul>
  )
}

export default List;
