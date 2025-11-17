export interface IIngredientType {
    id: number;
    name: string;
    type: string;
}

export interface IIngredientImage {
    id?: number;
    url?: string;
    alt?: string;
}

export interface IIngredientDTO {
    id: number;
    type_id: number;
    name: string;
    description: string;
    sku: string;
    marketplace_sku: string | null;
    quantity: number;
    price: string;
    sum: string;
    width: string;
    height: string;
    length: string;
    weight: string;
    link: string;
    created_at: string;
    updated_at: string;
    type: IIngredientType;
    images: IIngredientImage[];
}
