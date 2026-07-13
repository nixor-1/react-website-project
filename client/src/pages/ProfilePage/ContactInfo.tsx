import { useTranslation } from "react-i18next";
import Table from "../../components/Table";
import Icon from "../../components/Icon";
import { v4 as uuidv4 } from "uuid";

type infoTableData = {
  iconName: string;
  text: string;
  id: string;
};

const info: infoTableData[] = [
  // { iconName: 'phone', text: '+45 42 43 94 46', id: uuidv4() },
  { iconName: "mail", text: "nick.joergensen1@protonmail.com", id: uuidv4() },
  { iconName: "linkedin", text: "Nick Jørgensen", id: uuidv4() },
  { iconName: "github", text: "nixor-1", id: uuidv4() },
];

const columns = [
  {
    header: "test",
    className: "w-[0px] whitespace-nowrap",
    render: (info: infoTableData) => <Icon iconName={info.iconName} />,
  },
  {
    header: "test2",
    className: "whitespace-nowrap pl-4",
    render: (info: infoTableData) => <p>{info.text}</p>,
  },
];

const ContactInfoTextBody = () => {
  const { t, i18n } = useTranslation();

  return (
    <Table
      data={info}
      columns={columns}
      rowKey={(info) => info.id}
      showHeaders={false}
      isEmbedded={true}
      alignment="left"
      useFixedLayout={false}
    />
  );
};

export default ContactInfoTextBody;
