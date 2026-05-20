import { useTranslation } from "react-i18next";
import Table from "../../components/Table";
import IndicatorBar from "../../components/IndicatorBar";
import { ComponentOrientation } from "@react-project/shared/components";

type langTableData = {
  lang: string;
  lvl: number;
  id: string;
}

const columns = [
  {
    header: 'test',
    className: "w-[0px] whitespace-nowrap",
    render: (info: langTableData) => <p>{info.lang}</p>
  },
  {
    header: 'test2',
    className: "whitespace-nowrap pl-4",
    render: (info: langTableData) => {
      return (
        <IndicatorBar
          lvl={info.lvl}
          maxLvl={5}
          orientation={ComponentOrientation.HORIZONTAL}
        />
      )
    }
  }
];

const LangInfoTextBody = () => {
  const { t, i18n } = useTranslation();

  const info: langTableData[] = [
    { lang: t('about-page.lang.danish'), lvl: 5, id: 'da' },
    { lang: t('about-page.lang.english'), lvl: 5, id: 'en' },
    { lang: t('about-page.lang.french'), lvl: 4, id: 'fr' },
  ]

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
  )
}

export default LangInfoTextBody;
