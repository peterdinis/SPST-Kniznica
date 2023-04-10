import Header from "@/components/shared/Header";
import * as api from "../../../api/queries/bookQueries";
import { useTable } from "react-table";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import FallbackLoader from "@/components/shared/FallbackLoader";

const columns = [
    {
        Header: "ID",
        accessor: "id"
    },
    {
      Header: "Meno",
      accessor: "name",
    },

    {
        Header: "Popis",
        accessor: "description"
    },

    {
        Header: "Author",
        accessor: "author"
    },

    {
        Header: "Rok",
        accessor: "year"
    },

    {
        Header: "Dostupná",
        accessor: "avaiable"
    },

    {
        Header: "Počet strán",
        accessor: "pages"
    },

    {
        Header: "Vydavateľstvo",
        accessor: "publisher"
    },

    {
        Header: "Status",
        accessor: "status"
    },

    {
        Header: "Category",
        accessor: "categoryId"
    }
  ];

const AdminBooks: React.FC = () => {
  const { data, isError, isLoading } = useQuery(["allBooks"], api.getBooks);
  const tableInstance = useTable({ columns, data });

  if (isError) {
    return <FallbackRender error={"Nastala chyba"} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <Header name="Všetky knihy" />
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default AdminBooks;
