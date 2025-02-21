export type ComponentDTO = {
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
}

export type EnumUnitMeasure = {
  PIECES: 'PIECES',
  PACKAGING: 'PACKAGING',
  GRAMS: 'GRAMS',
  METERS: 'METERS'
}