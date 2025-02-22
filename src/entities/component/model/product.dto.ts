export type ComponentDTO = {
  id?: string;
  title: string;
  description?: string;
  price: number;
  images: string[];
  seller_link: string;
  remainder: number;
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
