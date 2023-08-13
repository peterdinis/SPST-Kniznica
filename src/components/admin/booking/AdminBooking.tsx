import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable, usePagination, Column } from "react-table";
import ScrollToTop from "@/hooks/useScroll";
import { IBookingInfo, IBookingInfoUpdate } from "@/interfaces/IBooking";
import { CustomTableState } from "@/interfaces/ITable";
import { backendURL } from "@/constants/envUrls";
import { Header } from "@/components/shared";
import prefetchBookings from "@/hooks/usePrefetchBookings";

const AdminBookings: React.FC = () => {
  const [tableData, setTableData] = useState<IBookingInfo[]>([]);

  const columns = useMemo(
    () => [
      {
        Header: "ID objednávky",
        accessor: "id",
      },
      {
        Header: "Meno Používateľa",
        accessor: "username",
      },
      {
        Header: "ID knihy",
        accessor: "bookId",
      },
      {
        Header: "Požičaná od",
        accessor: "from",
      },

      {
        Header: "Požičaná do",
        accessor: "to",
      },
    ],
    []
  );

  const {
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
  } = useTable(
    {
      columns: columns as unknown as Column<IBookingInfo>[],
      data: tableData,
      initialState: {
        pageIndex: 0,
      } as unknown as CustomTableState<IBookingInfo>,
    },
    usePagination
  ) as unknown as IBookingInfoUpdate;

  useEffect(() => {
    axios
      .get<IBookingInfo[]>(backendURL + "bookings")
      .then((response) => {
        const data = response.data;
        setTableData(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div onLoad={prefetchBookings}>
      <Header name="Zoznam všetkých objednávok" />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                {headerGroups!.map((headerGroup) => (
                  <tr
                    className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column) => (
                      <th className="px-4 py-3" {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white" {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="text-gray-700" {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td
                          className="px-4 py-3 text-xs border"
                          {...cell.getCellProps()}
                        >
                          <span className="px-2 py-1 font-bold rounded-sm">
                            {cell.render("Cell")}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex justify-center mt-8 pb-2">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
              >
                Predchazajúca stránka
              </button>
              {pageOptions.map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => gotoPage(pageIndex)}
                  className={`px-4 py-2 mx-1 rounded ${
                    pageIndex === pageIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {pageIndex}
                </button>
              ))}
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
              >
                Nasledujúca stránka
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default AdminBookings;
