import { useTable, useGlobalFilter, usePagination, Row } from 'react-table';
import { useQuery } from '@tanstack/react-query'
import { ClassAttributes, Fragment, HTMLAttributes, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, ThHTMLAttributes } from 'react';

import FallbackLoader from '@/components/shared/FallbackLoader';
import FallbackRender from '@/components/shared/errors/FallbackRender';
import { getAllAuthorsError } from '@/components/shared/errors/constants/errorMessages';

import * as api from '@/api/queries/authorQueries';


const AdminAuthors: React.FC = () => {
  const { data, isLoading, isError } = useQuery<any[]>(["getAllAdminAuthors"], api.getAuthors);

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={getAllAuthorsError} />;
  }

  const columns = [
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Meno",
      accessor: 'name'
    },
    {
      Header: 'Priezvisko',
      accessor: 'lastName'
    },
    {
      Header: 'Literárne obdobie',
      accessor: 'litPeriod'
    }
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    state,
  } = useTable<any>(
    {
      columns,
      data: data || [],
      state: { pageIndex: 0, pageSize: 5, globalFilter: "" },
    } as any,
    useGlobalFilter,
    usePagination
  ) as any;

  return (
    <Fragment>
      <div className="mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={state.globalFilter || ''}
          onChange={(e) => globalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead>
          {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: { getHeaderProps: () => JSX.IntrinsicAttributes & ClassAttributes<HTMLTableHeaderCellElement> & ThHTMLAttributes<HTMLTableHeaderCellElement>; render: (arg0: string) => string | number | boolean | ReactFragment | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | null | undefined; }) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row: Row<any>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="flex">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                !canPreviousPage
                  ? 'text-gray-500'
                  : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={`ml-2 px-3 py-2 text-sm font-medium rounded-md ${
                !canNextPage ? 'text-gray-500' : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Next
            </button>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <select
              className="px-2 py-1 text-sm border border-gray-300 rounded-md"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminAuthors;