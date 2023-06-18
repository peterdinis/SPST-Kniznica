import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import Header from '@/components/shared/Header';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TableComponent: React.FC = () => {
    const [tableData, setTableData] = useState<Todo[]>([]);

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Completed',
                accessor: 'completed',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state: { pageIndex },
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable<any>(
        {
            columns,
            data: tableData,
            initialState: { pageIndex: 0 },
        } as any,
        usePagination
    ) as any;

    useEffect(() => {
        axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                const data = response.data;
                setTableData(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []); // Run the effect only once on initial render

    return (
        <div>
            <Header name="Zoznam všetkých spisovateľov" />
            <table {...getTableProps()} className="table-auto">
                <thead>
                    {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
                >
                    Previous
                </button>
                {pageOptions.map((pageIndex: any) => (
                    <button
                        key={pageIndex}
                        onClick={() => gotoPage(pageIndex)}
                        className={`px-4 py-2 mx-1 rounded ${pageIndex === pageIndex ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {pageIndex + 1}
                    </button>
                ))}
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>

            <div className="flex justify-center mt-4">
                <span>Page{' '}</span>
                <select
                    value={pageIndex}
                    onChange={(e) => {
                        const selectedPageIndex = Number(e.target.value);
                        gotoPage(selectedPageIndex);
                    }}
                    className="px-4 py-2 mx-1 rounded"
                >
                    {pageOptions.map((pageIndex: any) => (
                        <option key={pageIndex} value={pageIndex}>
                            {pageIndex + 1}
                        </option>
                    ))}
                </select>
                <span>{`of ${pageCount}`}</span>
            </div>

            <div className="flex justify-center mt-4">
                <span>Page size:{' '}</span>
                <select
                    value={tableData.length}
                    onChange={(e) => {
                        const selectedPageSize = Number(e.target.value);
                        setPageSize(selectedPageSize);
                    }}
                    className="px-4 py-2 mx-1 rounded"
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TableComponent;