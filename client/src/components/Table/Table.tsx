import { GenericTableProps } from "./Table.types";

const Table = <T,>({ data, columns, onRowClick, rowKey }: GenericTableProps<T>) => {
  return (
    <div className="h-full border border-color-primary rounded-rounding-primary border-width-secondary overflow-hidden flex flex-col">
      <div className="overflow-y-auto w-full flex-grow">
        <table className="w-full text-center border-collapse">
          <thead className="sticky top-0 bg-accent-color-primary z-10">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`p-4 text-title text-lg shadow-[inset_0_-1px_0_0_var(--color-color-primary)] ${col.className || ''}`}
                >
                  <div className="flex justify-center items-center">
                    {col.header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-color-primary bg-bg-color-primary">
            {data.map((item) => (
              <tr
                key={rowKey(item)}
                onClick={() => onRowClick?.(item)}
                className="hover:bg-blue-50/50 transition-colors group cursor-pointer"
              >
                {columns.map((col, index) => (
                  <td key={index} className={`p-4 ${col.className || ''}`}>
                    <div className="flex justify-center items-center h-full w-full">
                      {col.render(item)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
