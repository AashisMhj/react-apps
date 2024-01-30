import { useState } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";

enum InventoryStatus  {
    IN_STOCK,
    LOW_STOCK,
    OUT_OF_STOCK
}

type ProductType = {
    id: string,
    code: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string,
    quantity: number,
    inventoryStatus: InventoryStatus,
    rating: number
}

export default function DashboardCarousel(){
    const [products,] = useState<ProductType[]>([
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.OUT_OF_STOCK,
            rating: 5
        },
        {
            id: '1001',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.IN_STOCK,
            rating: 5
        },
        {
            id: '1002',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.LOW_STOCK,
            rating: 5
        },
        {
            id: '1002',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.LOW_STOCK,
            rating: 5
        },
        {
            id: '1003',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.LOW_STOCK,
            rating: 5
        },
        {
            id: '1004',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: InventoryStatus.LOW_STOCK,
            rating: 5
        },
    ]);
    const responsiveOptions:CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product:ProductType) => {
        switch (product.inventoryStatus){
            case InventoryStatus.IN_STOCK:
                return 'success';
            case InventoryStatus.LOW_STOCK:
                return 'warning';
            case InventoryStatus.OUT_OF_STOCK:
                return 'danger'
            default:
                return null;
        }
    }


    const productTemplate = (product:ProductType) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}  />
        </div>
    )
}