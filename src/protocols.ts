export type Products = {
    id: number,
    description: string,
    price: string,
    id_category: number,
    quantity: number
};

export type Services = {
    id: number,
    description: string,
    price: string
};


export type CreateService = Omit<Services, 'id'>;
export type CreateProduct = Omit<Products, 'id'>;