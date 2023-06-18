import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import Header from '@/components/shared/Header';
import { IAuthorInfo } from '@/interfaces/IAuthor';
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
                Header: 'Meno',
                accessor: 'name',
            },
            {
                Header: 'Priezvisko',
                accessor: 'lastName',
            },
            {
                Header: "Literárne obdobie",
                accessor: 'litPeriod'
            }
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
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600" {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th className="px-4 py-3" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </table>
                        <tbody>
                            
                        </tbody>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default TableComponent;