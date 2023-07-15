import { useState } from "react";
import { ProductType } from "@/types";
import { Box, Typography, Rating, Grid, Button, IconButton } from "@mui/material"
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// icon
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//
import { LoadingPage, ErrorPage } from "@/pages";

export default function ProductDetailPage() {

    const [count, setCount] = useState<number>(0);

    const { id } = useParams();
    const defaultProduct: ProductType = {
        id: 0,
        title: 'The title',
        image: '/',
        category: 'default',
        price: 0,
        description: "",
        rating: {
            rate: 0,
            count: 0
        }
    }
    function getProduct() {
        if (id) {
            return axios.get<ProductType>(`${import.meta.env.VITE_API_URL}/products/${id}`)
        }
    }
    const { data, isLoading, isError, error } = useQuery('product', getProduct)

    if (isLoading) {
        return <LoadingPage />
    }

    if (isError) {
        return <ErrorPage />
    }

    const product = data?.data || defaultProduct;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ marginBottom: '30px', textAlign: 'center' }}>
                <Typography variant="h4">{product?.title}</Typography>
            </Box>
            <img src={product.image} style={{ aspectRatio: '1:1', height: '300px', objectFit: 'contain' }} />
            <Box sx={{ maxWidth: '500px', margin: 'auto' }}>
                <Box sx={{display: 'flex', justifyContent: 'space-around', margin: '10px'}}>
                    <IconButton onClick={() => setCount(count + 1)}>
                        <AddIcon />
                    </IconButton>
                    <input  type="text" value={count} onChange={(event) => setCount(parseInt(event.target.value))} />
                    <IconButton onClick={() => setCount(count - 1)} disabled={count <= 0}>
                        <RemoveIcon />
                    </IconButton>
                </Box>
                <Grid container gap={2} sx={{margin: '10px'}}>
                    <Grid item xs={5} alignItems='center'>
                        <Button fullWidth variant="contained" color="secondary">Buy Now</Button>
                    </Grid>
                    <Grid item xs={5} alignItems='center'>
                        <Button fullWidth variant="contained" color="primary">Add To Card</Button>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }} >{product.category}</Typography>
                <Typography variant="body1" color="text.secondary">{product.description}</Typography>
                <Typography variant="h6">
                    $ {product.price}
                </Typography>
                <Rating value={product.rating.rate} readOnly />

            </Box>
        </Box>
    )
}