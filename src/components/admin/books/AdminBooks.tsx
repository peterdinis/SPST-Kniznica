import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import Header from '@/components/shared/Header';
import { backendURL } from '@/components/shared/constants/url';
import ScrollToTop from '@/hooks/useScroll';
import ReturnModal from '@/components/shared/modals/ReturnModal';
import { IBookInfo } from '@/interfaces/IBook';

const AdminBooks: React.FC = () => {
  const [tableData, setTableData] = useState<IBookInfo[]>([]);

  const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Meno Knihy',
                accessor: 'name',
            },
            {
                Header: 'Vydavateľstvo',
                accessor: 'publisher',
            },
            {
                Header: "Rok vydania",
                accessor: 'year'
            },

            {
              Header: "Detail",
              accessor: 'description'
            },

            {
                Header: 'Uprav autora',
                Cell: () => (
                    <ReturnModal btnName="Uprav autora" modalHeader="Edit author" />
                ),
            },
            {
                Header: 'Zmaž autora',
                Cell: () => (
                    <ReturnModal btnName="Zmaž autora" modalHeader="Delete the author" />
                ),
            },
        ],
        []
    );
  return (
    <>
    
    </>
  )
}

export default AdminBooks;