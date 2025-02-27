export type ComponentDTO = {
  id?: string;
  title: string;
  description?: string;
  price: number;
  images: string[];
  seller_link: string;
  remainder: number;
  createdAt: Date;
  unit_measure: EnumUnitMeasure;
  length: number;
  width: number;
  height: number;
  diameter: number;
};

export type EnumUnitMeasure = 'PIECES' | 'PACKAGING' | 'GRAMS' | 'METERS';

export const EnumUnitMeasureTranslate = {
  PIECES: 'Шт',
  PACKAGING: 'Упаковка',
  GRAMS: 'Грамм',
  METERS: 'Метр',
};

export type SortDto = {
  field: string;
  order: 'asc' | 'desc';
};

export type PriceFilterDto = {
  min?: number;
  max?: number;
};

export type DateFilterDto = {
  from?: Date;
  to?: Date;
};

export type GetComponent = {
  search?: string;
  sort?: SortDto[];
  price?: PriceFilterDto;
  createdAt?: DateFilterDto;
  page?: number;
  pageSize?: number;
};