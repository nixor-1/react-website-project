import { ComponentOrientation } from "@react-project/shared/components";
import SeparatorLine from "../SeparatorLine";
import { GenericTableProps } from "./Table.types";
import { SeparatorLineType } from "../SeparatorLine/SeparatorLine.types";

const Table = <T,>({
  data,
  columns,
  onRowClick,
  isEmbedded = false,
  showHeaders = true,
  showSepLines = true,
  heightStyling = "h-full",
  widthStyling = "w-full",
  alignment = "center",
  sepLineType = SeparatorLineType.Solid,
  useFixedLayout = true,
  rowKey
}: GenericTableProps<T>) => {
  const borderStyling = isEmbedded ? "" : "border border-color-primary rounded-rounding-primary border-width-secondary";
  const paddingStyling = isEmbedded ? "" : "p-4"

  const alignmentMap = {
    left: "text-left justify-start",
    center: "text-center justify-center",
    right: "text-right justify-end",
  };

  const layoutClass = useFixedLayout ? "table-fixed" : "table-auto";

  const alignmentClass = alignmentMap[alignment as keyof typeof alignmentMap] || alignmentMap.center;

  return (
    <div className={`${heightStyling} ${borderStyling} w-full overflow-hidden flex flex-col`}>
      <div className="overflow-y-auto w-full">
        <table className={`w-full ${layoutClass} text-center`}>
          {showHeaders && <thead className="sticky top-0 bg-accent-color-primary">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`${paddingStyling} text-title ${alignmentClass} ${showSepLines ? "shadow-[inset_0_-1px_0_0_var(--color-color-primary)]" : ""} ${col.className || ''}`}
                >
                  <div className="justify-center items-center">
                    {col.header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>}
          <tbody className={`bg-bg-color-primary`}>
            {data.map((item, index) => (
              <>
                <tr
                  key={rowKey(item)}
                  onClick={() => onRowClick?.(item)}
                  className="hover:bg-blue-50/50 transition-colors group cursor-pointer"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className={`${paddingStyling} ${col.className || ''}`}>
                      <div className={`items-center ${alignmentClass} h-full w-full`}>
                        {col.render(item)}
                      </div>
                    </td>
                  ))}
                </tr>

                {showSepLines && index < data.length - 1 && (
                  <tr className="border-none">
                    <td
                      colSpan={columns.length}
                      className="p-0 border-none leading-[0]"
                    >
                      <SeparatorLine
                        orientation={ComponentOrientation.HORIZONTAL}
                        type={SeparatorLineType.Dotted}
                      />
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
