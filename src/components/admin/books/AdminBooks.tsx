import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable, usePagination, Column } from "react-table";
import Header from "@/components/shared/Header";
import { backendURL } from "@/components/shared/constants/url";
import ScrollToTop from "@/hooks/useScroll";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import { IBookInfo, IBookInfoUpdate } from "@/interfaces/IBook";
import { CustomTableState } from "@/interfaces/ITable";

const AdminBooks: React.FC = () => {
  const [tableData, setTableData] = useState<IBookInfo[]>([]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Meno Knihy",
        accessor: "name",
      },
      {
        Header: "Vydavateľstvo",
        accessor: "publisher",
      },
      {
        Header: "Rok vydania",
        accessor: "year",
      },

      {
        Header: "Detail",
        accessor: "description",
      },

      {
        Header: "Uprav knihu",
        Cell: () => (
          <ReturnModal btnName="Uprav autora" modalHeader="Edit author" />
        ),
      },
      {
        Header: "Zmaž knihu",
        Cell: () => (
          <ReturnModal btnName="Zmaž autora" modalHeader="Delete the author" />
        ),
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
      columns: columns as unknown as Column<IBookInfo>[],
      data: tableData,
      initialState: { pageIndex: 0 } as unknown as CustomTableState<IBookInfo>,
    },
    usePagination
  ) as unknown as IBookInfoUpdate;

  useEffect(() => {
    axios
      .get<IBookInfo[]>(backendURL + "books")
      .then((response) => {
        const data = response.data;
        setTableData(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header name="Zoznam všetkých kníh" />
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

export default AdminBooks;
