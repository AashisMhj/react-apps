import { Grid } from "@mui/material"
import axios from 'axios';
import { useQuery } from 'react-query'
import { LoadingPage, ErrorPage } from '@/pages';
//
import type { ProductType } from '@/types';
import ProductCard from "./ProductCard";

export default function ProductsPage() {
    function getDashboardData() {
        return axios.get<ProductType[]>(`${import.meta.env.VITE_API_URL}/products`);
    }

    const { isLoading, isError, data: products, error } = useQuery('products', getDashboardData, { retry: 2 });

    if (isLoading) {
        return <LoadingPage />
    }

    if (isError) {
        return <ErrorPage />
    }
    return (
        <Grid container spacing={2}>
            {
                products?.data.map((item: ProductType) => (
                    <Grid key={item.id} item xs={3}>
                       <ProductCard data={item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}