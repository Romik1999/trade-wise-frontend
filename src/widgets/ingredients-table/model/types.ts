import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'

export interface IPagination {
    total: number;
    current_page: number;
    per_page: number;
}

export interface IIngredientsResponse {
    success: boolean;
    data: IIngredientDTO[];
    pagination: IPagination;
}

export interface IIngredientsFilters {
    type_id?: number;
    search?: string;
    page?: number;
    per_page?: number;
}

export interface IUseIngredientsTableReturn {
    isPending: boolean;
    isError: boolean;
    items: IIngredientDTO[] | undefined;
    error: Error | null;
    pagination: IPagination | undefined;
}
