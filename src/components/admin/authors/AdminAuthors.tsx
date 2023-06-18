import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import Header from '@/components/shared/Header';
import {IAuthorInfo } from '@/interfaces/IAuthor';
import { backendURL } from '@/components/shared/constants/url';

const TableComponent: React.FC = () => {
    const [tableData, setTableData] = useState<IAuthorInfo[]>([]);

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
            .get<IAuthorInfo[]>(backendURL + "authors")
            .then((response) => {
                const data = response.data;
                setTableData(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []);

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
                        {pageIndex}
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
        </div>
    );
};

export default TableComponent;