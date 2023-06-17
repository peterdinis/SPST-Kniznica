import { useTable, Column, useGlobalFilter, usePagination } from 'react-table';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/shared/Header';
import * as api from "@/api/queries/authorQueries"
import {IUpdateAuthor } from '@/interfaces/IAuthor';
import FallbackLoader from '@/components/shared/FallbackLoader';
import FallbackRender from '@/components/shared/errors/FallbackRender';
import { getAllAuthorsError } from '@/components/shared/errors/constants/errorMessages';

const AdminAuthors: React.FC = () =>{
    const { data, isLoading, isError } = useQuery<IUpdateAuthor>(["getAllAdminAuthors"], api.getAuthors);

    if (isLoading) {
        return <FallbackLoader />
      }
    
    if (isError) {
        return <FallbackRender error={getAllAuthorsError} />
    }

    const columns: Column<IUpdateAuthor>[] = [];

    return (
        <>
        rrrr
        </>
    )
}

export default AdminAuthors;