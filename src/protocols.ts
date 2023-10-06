export type Products = {
    id: number,
    description: string,
    price: string,
    id_category: number,
    quantity: number
}

export type CreateProduct = Omit<Products, 'id'>;