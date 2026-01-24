import type { FilterType } from '../consts'

export interface IBaseFilterConfigProps {
    id: string;
    type: FilterType;
    title: string;
    label: string;
    placeholder?: string;
}

export interface ISelectOption {
    id: string;
    title: string;
    value: string;
}

export type LoadOptionsFunction = (query: string) => Promise<ISelectOption[]>;

export interface IDateRangeFilter extends IBaseFilterConfigProps {
    type: FilterType.DATE_RANGE;
    filterKeys: {
        from: string;
        to: string;
    };
}

export interface INumberRangeFilter extends IBaseFilterConfigProps {
    type: FilterType.NUMBER_RANGE;
    filterKeys: {
        min: string;
        max: string;
    };
}

export interface ISelectMultipleFilter extends IBaseFilterConfigProps {
    type: FilterType.SELECT;
    filterKey: string;
    options: ISelectOption[];
    multiple?: boolean;
    defaultValue?: string;
}

export interface IBooleanFilter extends IBaseFilterConfigProps {
    type: FilterType.BOOLEAN;
    filterKey: string;
    defaultValue?: boolean;
}

export interface IAutocompleteFilter extends IBaseFilterConfigProps {
    type: FilterType.AUTOCOMPLETE;
    filterKey: string;
    loadOptions: LoadOptionsFunction;
}

export type FilterConfig =
    | IDateRangeFilter
    | INumberRangeFilter
    | ISelectMultipleFilter
    | IBooleanFilter
    | IAutocompleteFilter
