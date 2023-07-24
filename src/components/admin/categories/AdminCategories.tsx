import { useEffect, useMemo, useState, FormEvent } from "react";
import axios from "axios";
import { useTable, usePagination, Column } from "react-table";
import ScrollToTop from "@/hooks/useScroll";
import { ICategoryInfo, ICategoryInfoUpdate } from "@/interfaces/ICategory";
import { CustomTableState } from "@/interfaces/ITable";
import { backendURL } from "@/constants/url";
import { ReturnModal, Header } from "@/components/shared";
import { useRouter } from "next/router";
import { deleteSuccess, deleteError, updateSuccess, updateError } from "@/components/shared/toasts/categoryToast";


const AdminCategories: React.FC = () => {
  const [tableData, setTableData] = useState<ICategoryInfo[]>([]);

  const router = useRouter();

  const updateCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const categoryIdInput = formElements.namedItem("categoryId") as HTMLInputElement;
    const nameInput = formElements.namedItem("name") as HTMLInputElement;
    const descriptionInput = formElements.namedItem("description") as HTMLInputElement;

    if (categoryIdInput && nameInput && descriptionInput) {
      const categoryId = categoryIdInput.value;
      const name = nameInput.value;
      const description = descriptionInput.value;

      const data = {
        id: categoryId,
        name: name,
        description: description,
      };

      axios
        .patch(`${backendURL}category/${categoryId}`, data)
        .then((response) => {
          updateSuccess();
        })
        .catch((error) => {
          updateError();
        });
    }
  };

  const deleteCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const categoryIdInput = formElements.namedItem("categoryId") as HTMLInputElement;

    if (categoryIdInput) {
      const categoryId = categoryIdInput.value;
      axios
        .delete(`${backendURL}category/${categoryId}`)
        .then((response) => {
          deleteSuccess();
          router.push("/admin/categories/all");
        })
        .catch((error) => {
          deleteError();
          router.push("/category/failed");
        });
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Meno Kategórie",
        accessor: "name",
      },
      {
        Header: "Popis kategórie",
        accessor: "description",
      },

      {
        Header: "Uprav kategóriu",
        Cell: () => (
          <ReturnModal btnName="Uprav kategóriu" modalHeader="Upraviť kategóriu">
            <form className="mt-4" onSubmit={updateCategory}>
              <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                Id Kategórie
              </label>
              <input
                type="number"
                name="categoryId"
                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                Meno kategórie
              </label>
              <input
                type="text"
                name="name"
                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                Popis kategórie
              </label>
              <input
                type="text"
                name="description"
                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
              >
                Uprav kategóriu
              </button>
            </form>
          </ReturnModal>
        ),
      },
      {
        Header: "Zmaž kategóriu",
        Cell: () => (
          <ReturnModal btnName="Zmaž kategóriu" modalHeader="Zmazať kategóriu">
            <form className="mt-4" onSubmit={deleteCategory}>
              <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                Id Kategórie
              </label>
              <input
                type="number"
                name="categoryId"
                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 mt-4 bg-red-500 text-white rounded"
              >
                Zmaž kategóriu
              </button>
            </form>
          </ReturnModal>
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
      columns: columns as unknown as Column<ICategoryInfo>[],
      data: tableData,
      initialState: {
        pageIndex: 0,
      } as unknown as CustomTableState<ICategoryInfo>,
    },
    usePagination
  ) as unknown as ICategoryInfoUpdate;

  useEffect(() => {
    axios
      .get<ICategoryInfo[]>(backendURL + "categories")
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
      <Header name="Zoznam všetkých kategórií" />
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
                  className={`px-4 py-2 mx-1 rounded ${pageIndex === pageIndex
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

export default AdminCategories;
