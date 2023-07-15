export interface PriceType{
    rate: number,
    count: number
}
export interface ProductType{
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: PriceType,
}