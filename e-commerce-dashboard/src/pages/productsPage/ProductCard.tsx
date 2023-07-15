import { Card, CardHeader, CardContent, IconButton,Button, CardMedia, CardActions, Typography } from "@mui/material";
import { Share } from "@mui/icons-material";
import { Link } from "react-router-dom";
//
import { ProductType } from "@/types";
export default function ProductCard({data}:{data:ProductType}){
    return <Card>
        <CardHeader >{data.title}</CardHeader>
        <CardMedia component="img" height="194" image={data.image} alt={data.title} />
        <CardContent style={{height: '100px', overflow: 'hidden'}}>
            <Typography variant="body2" color="text.secondary">
                {data.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button variant="outlined"  >
                <Link style={{textDecoration: 'none'}} to={`/product/${data.id}`}>Learn more</Link>
            </Button>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
        </CardActions>
    </Card>
}